import { Block } from './Block';
import store, { State, StoreEvents } from './Store';

export function connect<P extends Record<string, unknown>>(
  Component: typeof Block<P>,
  mapStateToProps: (state: State) => P
) {
  // используем class expression
  return class extends Component {
    constructor(props: P) {
      // не забываем передать все аргументы конструктора
      super(props);

      // подписываемся на событие
      store.on(StoreEvents.Updated, () => {
        // вызываем обновление компонента, передав данные из хранилища
        this.setProps({ ...store.getState() });
      });
    }
  };
}
