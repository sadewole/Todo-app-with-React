import React, { Component } from 'react';
import Todo from './Todo'
import AddTodo from './addTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Buy milk'},
      {id: 2, content: 'Pay my bill'}
    ]
  }

  deleteTodo = (id) =>{
    let todos = this.state.todos.filter(todo=>{
      return todo.id !== id
    })

    this.setState({
      todos
    })
  }

  addTodo= (todo)=>{
    todo.id = Math.random()

    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
