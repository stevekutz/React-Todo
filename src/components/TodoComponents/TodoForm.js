import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
  console.log('TodoForm  ', props );

  //    <button onClick = {props.addTodoHandler}> Add </button>


  return (
    <div className = "todoform-container">


      <input
          className= 'inputField'
          type = 'text'
          name ='new_todo'
          placeholder = 'add something here'
          value = {props.value}
          onChange = {props.updateHandler}

        />


      <div className = 'button_controls'>
        <button onClick = {props.addTodoHandler}> Add </button>
        <button onClick = { props.clearAllHandler} > Clear All Todos </button>
        <button onClick = {props.clearTodoHandler}> Removed selected Todos </button>
      </div>

      <div className = 'search_controls'>
        <h3 className = 'search_h3'> Search item</h3>

        <input
          className = 'searchField'
          type = 'text'
          name = 'search_term'
          placeholder = 'enter search term here'
          value2 = {props.value}
          onChange={props.updateHandler}


        />

      </div>


    </div>

  )




};

export default TodoForm;