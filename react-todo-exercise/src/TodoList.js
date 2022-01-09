import React, {useState} from 'react';
import Todo from './Todo';

const TodoList = () => {
  const initialState=[];
  const [todoList, setTodoList] = useState(initialState);
  return (
    <div className="TodoList">
      <NewTodoForm addTodo={addTodo} />
      <ul>
        {todoList.map((todo, i) => {
          <Todo 
            key={i}
            removeTodo={removeTodo} 
          />
        })}
      </ul>
    </div>
  )
}

export default TodoList;
