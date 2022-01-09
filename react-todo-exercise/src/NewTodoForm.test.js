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

it('adds a new todo', () => {
    const { queryByText, getByPlaceholderText } = render(<NewTodoForm />);
    const newTodo = getByPlaceholderText("new todo");
    const newBtn = queryByText("Create new todo");
    expect(queryByText('eat a sandwich')).not.toBeInTheDocument();
    fireEvent.change(newTodo, {target: {value: 'eat a sandwich'}});
    fireEvent.click(newBtn);
    expect(queryByText('eat a sandwich')).toBeInTheDocument();
});
