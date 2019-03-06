import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
  console.log('TodoForm  ', props );

  return (
    <div className = "todoform-container">


      <input
          type = 'text'
          name ='new_todo'
          placeholder = 'add something here'
          value = {props.value}
          onChange = {props.updateHandler}

        />  {props.new_todo}

        <button onClick = {props.addTodoHandler}> Add </button>




    </div>

  )




};

export default TodoForm;