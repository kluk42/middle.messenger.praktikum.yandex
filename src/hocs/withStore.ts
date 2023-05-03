import { Block, IBlock } from '../utils/Block';
import isEqual from '../utils/isEqual';
import store, { State, StoreEvents } from '../utils/Store';

export function withStore<
  Props extends Record<string, unknown>,
  V extends Record<string, unknown> | undefined,
  C extends Record<string, IBlock<Record<string, unknown>> | IBlock<Record<string, unknown>>[]>
>(mapStateToProps: (state: State) => V) {
  return function wrap(Component: typeof Block<Props, C>) {
    let previousState: V;

    return class WithStore extends Component {
      constructor(props: Omit<Props, keyof V>) {
        previousState = mapStateToProps(store.getState());

        super({ ...props, ...previousState } as Props & V);

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState());

          if (!isEqual(previousState, stateProps)) {
            previousState = { ...stateProps };
            this.setProps({ ...stateProps } as Props & V);
          }
        });
      }
    };
  };
}
