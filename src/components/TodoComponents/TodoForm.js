import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
  console.log('TodoForm  ', props );

  return (
    <div className = "todoform-container">


      <input
          className= 'inputField'
          type = 'text'
          name ='new_todo'
          placeholder = 'add something here'
          value = {props.value}
          onChange = {props.updateHandler}

        />  {props.new_todo}



      <div className = 'button_controls'>
        <button onClick = {props.addTodoHandler}> Add </button>


        <button> Clear All Todos </button>

        <button onClick = {props.clearTodoHandler}> Removed selected Todos </button>




      </div>



    </div>

  )




};

export default TodoForm;