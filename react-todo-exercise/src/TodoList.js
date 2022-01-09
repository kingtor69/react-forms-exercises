import React, {useState} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  console.log(Array.isArray(todoList));

  const addTodo = (newTodo) => {
    setTodoList([
      ...todoList,
      newTodo
    ]);
  };

  const deleteTodo = (todoId) => {
    setTodoList(todoList.filter ((t, i) => (i !== todoId)));
  };

  return (
    <div className="TodoList">
      <NewTodoForm 
        addTodo={addTodo} 
      />
      <ul>
        {todoList.map((todo, i) => (
          <Todo 
            todo={todo}
            key={i}
            id={i}
            deleteTodo={deleteTodo} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
