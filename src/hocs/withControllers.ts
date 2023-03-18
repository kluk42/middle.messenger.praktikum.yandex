import { Block } from '../utils/Block';

export function withControllers<
  OwnProps extends Record<string, unknown>,
  C extends Record<string, any>
>(Component: typeof Block<OwnProps>, controllers: C) {
  return class WithController extends Component {
    constructor(props: OwnProps) {
      const additionalProps = Object.entries(controllers).reduce(
        (result, [name, controller]: [keyof C, C[keyof C]]) => {
          result[name] = controller;

          return result;
        },
        {} as C
      );

      super({ ...props, ...additionalProps } as OwnProps);
    }
  };
}
