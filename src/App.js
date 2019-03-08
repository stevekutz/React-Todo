import React from 'react';

import './components/TodoComponents/TodoHeader';
import './components/TodoComponents/TodoList';
import './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';
import TodoHeader from "./components/TodoComponents/TodoHeader";
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import productivity from './components/TodoComponents/img/productivity.jpg';

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
      search_term: '',
      count: 0,
      src: {productivity},





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

/*    my way....
  addTodoHandler = async () => {

    if(this.state.new_todo === '' || this.duplicateTodoCheck(this.state.allTodos)) {
      this.setState({new_todo: ''});
    } else {
      const moreTodos = this.state.allTodos.slice();    //   FROM HERE
      moreTodos.push({
        task: this.state.new_todo,
        id: Date.now(),
        completed: false
      });

      await this.setState({                   // seems less code, easier, yes?
        allTodos: moreTodos,
        new_todo: ''
      });
    }

    this.motivation_msg_handler();
  };
*/

// Dan's method
  addTodoHandler = async () => {
    if(this.state.new_todo === '' || this.duplicateTodoCheck(this.state.allTodos)) {
      this.setState({new_todo: ''});
    } else {
       let addedTodo = {                        // FROM HERE
        task: this.state.new_todo,
        id: Date.now(),
        completed: false
        };

      await this.setState( prevState => {       // what does this do better?
      return {
         allTodos: [...prevState.allTodos, addedTodo],
          new_todo: ''
       }
      })
    }
    this.motivation_msg_handler();

  };


  searchHandler = () => {
    const searchTodos = this.state.allTodos.slice();



  };




  motivation_msg_handler = () => {
    const currentTodos = this.state.allTodos;
    this.incrementHandler();

    (currentTodos.length)
      ? (this.setState((
        { motivation_msg: 'Get on these !!',
          src: {productivity}
        })) )
      : this.setState({motivation_msg: 'find something to do'});
  };

  duplicateTodoCheck(allTodos) {
    for(let i = 0; i < allTodos.length; i++) {
      if (allTodos[i].task === this.state.new_todo) return true
    }
    return false;
  }

/*  my way
  clearAllHandler = async () => {
    await this.setState({
      allTodos: []
    });
    this.motivation_msg_handler();
  };
*/

// safer way
  clearAllHandler = async () => {
    await this.setState(prevState => {
      return {
        allTodos: prevState.allTodos = [],   // used to be just allTodos: []
        new_todo: ''
      }

    });

    this.motivation_msg_handler();
  };

  // stretch FUN - add styling crossout
  //
/*  my way
  toggleRemoveTodoHandler = id => {
    let todosToggled = this.state.allTodos.slice();
    todosToggled = todosToggled.map(todo => {
      if(todo.id === id) todo.completed = !todo.completed;
        return todo;
    });
    this.setState({allTodos: todosToggled});
  };
*/

// safer way
  toggleRemoveTodoHandler = itemId => {
    this.setState(prevState => {
      return {
        allTodos: prevState.allTodos.map(todoItem => {
          if (todoItem.id === itemId) {
            return {
              task: todoItem.task,
              id: todoItem.id,
              completed: !todoItem.completed
            };
          } else {
            return todoItem;
          }
        })
      };
    });
  };


/*
  // need to filter on completed?
  clearTodoHandler = async () => {
    let todosFiltered = this.state.allTodos.slice();
    todosFiltered = todosFiltered.filter(todo => !todo.completed);

    await this.setState({
      allTodos: todosFiltered

    });
    this.motivation_msg_handler();
  };
*/
// safer way
  clearTodoHandler = async () => {
    await this.setState(prevState => {
      return {
        allTodos: prevState.allTodos.filter (todoItem => !todoItem.completed)
      }
    });


    this.motivation_msg_handler();
  };

 incrementHandler = () => {
   this.setState(prevState => {
     return {count: prevState.count + 1}
   });


 };

// value = {this.state.new_todo}

  render() {
    return (
      <div className = "main_Todo ">
       <TodoHeader header_msg = "Tasks to complete"/>
       <TodoList
         className = ""
         motivation_msg = {this.state.motivation_msg}
         src = {this.state.src}
         currentTodos = {this.state.allTodos}
         toggleRemoveTodoHandler = {this.toggleRemoveTodoHandler}
         motivation_msg_handler = {this.motivation_msg_handler}
         count = {this.state.count}
       />
       <TodoForm
        value = {this.state.new_todo}
        value2 = {this.state.search_term}
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
