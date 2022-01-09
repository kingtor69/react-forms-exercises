import { render } from '@testing-library/react';
import TodoList from './TodoList';

it('renders without crashing', () => {
  render(<TodoList />);
});

it('renders snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});
