import React from 'react';

import './components/TodoComponents/TodoHeader';
import './components/TodoComponents/TodoList';
import './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';
import TodoHeader from "./components/TodoComponents/TodoHeader";
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

// import moment from 'moment';
//     {moment().format('DD MMM').toLowerCase()}


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
      motivation_msg: 'Get on these !!',




    }



}
  // event handlers here
  updateHandler = event => {

    console.log(
      '******** target name & value in updated handler',
      event.target.name,
      event.target.value
    );

    // use controlled component to manage events
    this.setState({[event.target.name]: event.target.value} );



  };


  // slice & push & add to state OR Dan's way
  // trying my way first
  addTodoHandler = () => {

    if(this.state.new_todo === '' || this.duplicateTodoCheck(this.state.allTodos)) {
      this.setState({new_todo: ''});
    } else {
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
    }
  };

  motivation_msg_handler = () => {
    (this.state.allTodos.length)
      ? this.setState({motivation_msg: 'Get on these !!'})
      : this.setState({motivation_msg: 'find something to do'});
  };

  duplicateTodoCheck(allTodos) {
    for(let i = 0; i < allTodos.length; i++) {
      if (allTodos[i].task === this.state.new_todo) return true
    }
    return false;
  }

  clearAllHandler = () => {
    this.setState({
      allTodos: []
    });
    this.motivation_msg_handler();
  };


  // stretch FUN - add styling crossout
  toggleRemoveTodoHandler = id => {
    let todosToggled = this.state.allTodos.slice();
    todosToggled = todosToggled.map(todo => {
      if(todo.id === id) todo.completed = !todo.completed;
        return todo;
    });
    this.setState({allTodos: todosToggled});
  };

  // need to filter on completed?
  clearTodoHandler = () => {
    let todosFiltered = this.state.allTodos.slice();
    todosFiltered = todosFiltered.filter(todo => !todo.completed);

    this.setState({
      allTodos: todosFiltered

    });
    this.motivation_msg_handler();
  };





  render() {
    return (
      <div className = "main_Todo ">
       <TodoHeader header_msg = "Tasks to complete"/>
       <TodoList
         className = ""
         motivation_msg = {this.state.motivation_msg}
         currentTodos = {this.state.allTodos}
         toggleRemoveTodoHandler = {this.toggleRemoveTodoHandler}
         motivation_msg_handler = {this.motivation_msg_handler}
       />
       <TodoForm
        value = {this.state.new_todo}
        updateHandler = {this.updateHandler}
        addTodoHandler = {this.addTodoHandler}
        clearTodoHandler = {this.clearTodoHandler}
        clearAllHandler = {this.clearAllHandler}
       />

      </div>
    );
  }
}

export default App;
