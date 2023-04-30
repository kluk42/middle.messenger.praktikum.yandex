import { Button } from './Button';

describe.only('Button tests', () => {
  it('should render', () => {
    new Button({ label: 'Bla' });
  });
});
