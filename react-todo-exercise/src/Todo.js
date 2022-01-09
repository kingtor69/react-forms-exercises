import React from 'react';

const Todo = ({ id, todo, deleteTodo }) => {
  const htmlId = `todo${id}`;
  const testId = `test-${htmlId}`;
  const deleteThisTodo = () => { deleteTodo(id) };
  return (
    <li className="Todo">
      <button 
        className="deleteTodoButton"
        onClick={deleteThisTodo}
        id={htmlId}
      >
        X
      </button>
      {todo}
    </li>
  );
};

export default Todo;
