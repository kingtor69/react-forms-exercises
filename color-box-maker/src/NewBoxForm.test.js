import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it('renders witout ceashing', () => {
  render(<NewBoxForm />);
});

it('renders snapshot', () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});
