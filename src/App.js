import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
  {
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: todos 
    };  
  }

    handleClearAll = () => {
      this.setState({
        todos: todos
      });
    }
  
    handleAddTodo = (todoName) => {
      const newTodo = {
        name:todoName,
        id: Date.now(),
        complete: false
      };
      this.setState({
        ...this.state,
        todos: [...this.state.todos, newTodo]
      });
    }
  
    handleToggleTodo = (selectedTodo) => {
      this.setState({
        ...this.state,
        todos: this.state.todos.map(todo => {
          if(todo.id === selectedTodo.id) {
            return({
              ...todo,
              complete: !todo.complete
            });
          } else {
            return todo;
          }
        })
      });
    }

  render() {
    console.log("working");
    return (
      <div className='App'>
        <div className='Header'>
          <h1>Welcome to your Todo App!</h1>
          <TodoForm handleAddTodo={this.handleAddTodo}/>
        </div>
        <TodoList handleToggleTodo={this.handleToggleTodo} todos={this.state.todos} />
        <button onClick={this.handleClearAll} className='clear-btn'>Clear All</button>
      </div>
    );
  }
}

export default App;
