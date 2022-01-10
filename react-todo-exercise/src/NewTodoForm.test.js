import React from "react";
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it('renders without crashing', () => {
  render(<NewTodoForm />);
});

it('renders snapshot', () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it('runs create function when new todo submitted', () => {
  const createFunc = jest.fn();
  const {getByText} = render(
    <NewTodoForm 
      addTodo={createFunc} 
    />);
    const newTodoBtn = getByText("Create new todo");
    fireEvent.click(newTodoBtn);
    expect(createFunc).toHaveBeenCalled();
})