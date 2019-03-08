// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import './Todo.css';
import productivity from './img/productivity.jpg';

const TodoList = (props) => {
  console.log('TodoList props ', props);

  return (

    <div className = "todolist-container">
      <div className = "todolist-header">
        <img src = {props.src} alt = 'img_prop'/>
        <h4> {props.motivation_msg} </h4>
        <h4>  render called {props.count} times </h4>

      </div>


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

export default TodoList;