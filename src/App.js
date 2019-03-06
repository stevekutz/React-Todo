import React from 'react';

import './components/TodoComponents/TodoHeader';
import './components/TodoComponents/TodoList';
import './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';
import TodoHeader from "./components/TodoComponents/TodoHeader";
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      allTodos: [
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
      new_todo: '',
      render_count: 0,





    }



}
  // event handlers here
  updateHandler = event => {

    console.log(
      '******** target name & value in updated handler',
      event.target.name,
      event.target.value
    );

    // use controlled component tpo manage events
    this.setState({[event.target.name]: event.target.value} );



  };


  // slice & push & add to state OR Dan's way
  // trying my way first
  addTodoHandler = () => {
    const moreTodos = this.state.allTodos.slice();
    moreTodos.push({
      task: this.state.new_todo,
      id: Date.now(),
      completed: false
    });

    this.setState({
      allTodos: moreTodos,
      new_todo: ''

    });

  };



  // need to filter on completed?
  clearTodoHandler = ev => {



  };


  // stretch FUN - add styling crossout
  toggleTodoHandler = id => {

  };


  render() {
    return (
      <div className = "main_Todo ">
       <TodoHeader header_msg = "Tasks to complete"/>
       <TodoList
         className = ""
         motivation_msg = "Get on these !!"
         currentTodos = {this.state.allTodos}
       />
       <TodoForm
        value = {this.state.new_todo}
        updateHandler = {this.updateHandler}
        addTodoHandler = {this.addTodoHandler}
       />

      </div>
    );
  }
}

export default App;
