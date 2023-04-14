import { EventBus } from './EventBus';
import isEqual from './isEqual';

enum BlockEvents {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_CDU = 'flow:component-did-update',
  FLOW_RENDER = 'flow:render',
}

type BlockEventNamesType = {
  INIT: BlockEvents.INIT;
  FLOW_CDM: BlockEvents.FLOW_CDM;
  FLOW_CDU: BlockEvents.FLOW_CDU;
  FLOW_RENDER: BlockEvents.FLOW_RENDER;
};

type EventArgs = {
  [BlockEvents.INIT]: [];
  [BlockEvents.FLOW_CDM]: [];
  [BlockEvents.FLOW_CDU]: [any, any];
  [BlockEvents.FLOW_RENDER]: [];
};

export abstract class Block<P extends Record<string, unknown> = any> {
  public id = Math.random().toString(16).slice(6);
  protected children: Record<
    string,
    Block<Record<string, unknown>> | Block<Record<string, unknown>>[] | undefined
  >;
  public props: P;
  private _element: HTMLElement | null = null;
  private eventBus: EventBus<BlockEventNamesType, EventArgs>;

  constructor(childrenWithProps: P) {
    this.eventBus = new EventBus();
    this.registerEvents();

    const { props, children } = this.separatePropsFromChildren(childrenWithProps);
    this.children = children;

    this.props = this.makePropsProxy(props);

    this.eventBus.emit(BlockEvents.INIT);
  }

  protected separatePropsFromChildren(childrenAndProps: P) {
    const props: Record<string, unknown> = {};
    const children: Record<
      string,
      Block<Record<string, unknown>> | Block<Record<string, unknown>>[]
    > = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length > 0 && value.every(v => v instanceof Block)) {
        children[key] = value;
      } else if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props: props as P, children };
  }

  private _render() {
    const fragment = this.render();

    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._element.replaceWith(newElement);
    }

    this._element = newElement;

    this.addEvents();
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  protected compile(template: (context: any) => string, context: any) {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      if (component) {
        if (Array.isArray(component)) {
          contextAndStubs[name] = component.map(child => `<div data-id="${child.id}"></div>`);
        } else {
          contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
        }
      }
    });
    const html = template(contextAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = html;

    const replaceStub = (component: Block<Record<string, unknown>>) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

      if (!stub) {
        return;
      }
      component.getContent()?.append(...Array.from(stub.childNodes));

      stub.replaceWith(component._element!);
    };

    Object.entries(this.children).forEach(([_, component]) => {
      if (component) {
        if (Array.isArray(component)) {
          component.forEach(replaceStub);
        } else {
          replaceStub(component);
        }
      }
    });

    return temp.content;
  }

  getContent() {
    return this._element;
  }

  setProps(nextProps: Partial<P>) {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  }

  private addEvents() {
    const { events = {} } = this.props as P & { events: Record<string, () => void> };
    Object.keys(events).forEach(eventName => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  private makePropsProxy(props: P) {
    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop: string, value) => {
        const oldTarget = { ...target };

        target[prop as keyof P] = value;

        this.eventBus.emit(BlockEvents.FLOW_CDU, oldTarget, target);

        return true;
      },

      deleteProperty() {
        throw new Error('Нет прав');
      },
    });
  }

  private _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus.emit(BlockEvents.FLOW_CDM);

    Object.values(this.children).forEach(child => {
      if (child) {
        if (Array.isArray(child)) {
          child.forEach(ch => ch.dispatchComponentDidMount());
        } else {
          child.dispatchComponentDidMount();
        }
      }
    });
  }

  public hide() {
    return;
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus.emit(BlockEvents.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(oldProps: P, newProps: P) {
    return !isEqual(oldProps, newProps);
  }

  private registerEvents() {
    this.eventBus.on(BlockEvents.INIT, this._init.bind(this));
    this.eventBus.on(BlockEvents.FLOW_RENDER, this._render.bind(this));
    this.eventBus.on(BlockEvents.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.on(BlockEvents.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  private _init() {
    this.init();
    this.eventBus.emit(BlockEvents.FLOW_RENDER);
  }

  protected init() {}
}
