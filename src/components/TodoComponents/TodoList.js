// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import './Todo.css';


const TodoList = (props) => {
  console.log('TodoList props ', props);

  return (

    <div className = "todolist-container"
         onLoad = {props.motivation_msg_handler}
        >
        <h4
          onChange = {props.motivation_msg_handler}
        > {props.motivation_msg}</h4>

      {props.currentTodos.map(todo => {
        return  (
          <Todo
            className = "todoItem"
            todo = {todo}
            key = {todo.id}
            completed = {todo.completed}
            toggleRemoveTodoHandler = {props.toggleRemoveTodoHandler}
            motivation_msg_handler = {props.motivation_msg_handler}
          />
        );
      })}

    </div>


)




};

export default TodoList