import React from 'react';
import './Todo.css';


const Todo = (props) => {
 // console.log('Todo props ', props);

//     onClick = {props.toggleRemoveTodoHandler(props.todo.id)}
 // console.log("______TOGGLE LINE________", props.todo);

  return (

    <div className = "todoItem"
          style = {
            props.todo.completed
              ? {textDecoration: "line-through", textDecorationColor: "red"}
              : null
          }
          onClick = {() => props.toggleRemoveTodoHandler(props.todo.id)}
    >

      {props.todo.task}
    </div>



  )

};

export default Todo