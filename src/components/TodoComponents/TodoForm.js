import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
  console.log('TodoForm  ', props );

  return (
    <div className = "todoform-container">
      <form onSubmit = {this.formSubmitHandler}>
        <input
          type = 'text'
          name ='task'
          placeholder = 'add something here'
          value = {props.new_todo}
          onChange = {props.updateHandler}



        />







      </form>



    </div>

  )




};

export default TodoForm;