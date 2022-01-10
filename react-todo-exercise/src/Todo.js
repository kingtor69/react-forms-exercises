import React from 'react';

const Todo = ({ id, todo, deleteTodo, editThisTodo }) => {
  const deleteId = `deleteTodo${id}`;
  const testId = `test-${deleteId}`;
  const deleteThisTodo = () => { deleteTodo(id) };
  return (
    <li className="Todo">
      <button 
        className="deleteTodoButton"
        onClick={deleteThisTodo}
        id={deleteId}
      >
        X
      </button>
      {todo}
    </li>
  );
};

export default Todo;
