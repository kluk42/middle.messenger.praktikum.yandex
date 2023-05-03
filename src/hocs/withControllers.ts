import { Block, IBlock } from '../utils/Block';

export function withControllers<
  Props extends Record<string, unknown>,
  C extends Record<string, any>,
  Children extends Record<
    string,
    IBlock<Record<string, unknown>> | IBlock<Record<string, unknown>>[]
  >
>(Component: typeof Block<Props, Children>, controllers: C) {
  return class WithController extends Component {
    constructor(props: Omit<Props, keyof C>) {
      const additionalProps = Object.entries(controllers).reduce(
        (result, [name, controller]: [keyof C, C[keyof C]]) => {
          result[name] = controller;

          return result;
        },
        {} as C
      );

      super({ ...props, ...additionalProps } as Props);
    }
  };
}
