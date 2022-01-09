import { render } from '@testing-library/react';
import Todo from './Todo';

it('renders without crashing', () => {
  render(<Todo />);
});

it('renders snapshot', () => {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});
