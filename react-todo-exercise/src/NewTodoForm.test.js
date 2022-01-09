import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it('renders without crashing', () => {
  render(<NewTodoForm />);
});

it('renders snapshot', () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
