import React from 'react';
import './Todo.css';


const Todo = (props) => {
  console.log('Todo props ', props);




  return (

    <div className = "todoItem">

      {props.todo.task}
    </div>



  )

};

export default Todo