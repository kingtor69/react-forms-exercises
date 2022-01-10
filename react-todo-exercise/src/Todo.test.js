import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

it('renders without crashing', () => {
  render(<Todo />);
});

it('renders snapshot', () => {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

it('runs deleteTodo function when delete button clicked', () => {
  const deleteFunc = jest.fn();
  const { getByText } = render(<Todo deleteTodo={deleteFunc} />);
  const deleteBtn = getByText('X');
  fireEvent.click(deleteBtn);
  expect(deleteFunc).toHaveBeenCalled();
});
