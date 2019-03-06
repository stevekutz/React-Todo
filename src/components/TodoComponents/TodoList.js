// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import './Todo.css';


const TodoList = (props) => {
  console.log('TodoList props ', props);

  return (

    <div className = "todolist-container">
        <h4> {props.motivation_msg}</h4>

      {props.currentTodos.map(todo => {
        return  (
          <Todo
            className = "todoItem"
            todo = {todo}
            key = {todo.id}
            compeleted = {todo.completed}
          />
        );
      })}

    </div>


)




};

export default TodoList