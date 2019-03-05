import React from 'react';
import './components/TodoComponents/TodoList';
import './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      myTodos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      count: 0,





    }



}
  // event handlers here
  updateHandler = ev => {




  };


  // slice & push & add to state
  addTodo = () => {
    const todo = {
      task: '',
      id: Date.now(),
      completed: false
    }



  };


  // need to filter on completed?
  clearTodo = ev => {



  };


  // stretch FUN - add styling crossout
  toggleTodo = id => {

  };


  render() {
    return (
      <div className = "main_Todo ">
        <h2 className = "title"> Tasks to complete </h2>
      </div>
    );
  }
}

export default App;
