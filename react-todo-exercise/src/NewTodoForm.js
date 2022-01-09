import React, {useState} from 'react';

const NewTodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = e => {
    setNewTodo(todo => (e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className="NewTodoForm">
      <label
        htmlFor="new-todo"
      >
        New todo:
      </label>
      <input
        type="text"
        id="new-todo"
        placeholder="new todo"
        value={newTodo}
        onChange={handleChange}
      />
      <button 
        onClick={handleSubmit}
      >
        Create new todo
      </button>
    </form>
  )
}

export default NewTodoForm;
