import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  toggleTodo = (clickedItemId) => {
    const newTodos = this.state.todos.map((item) => {
      if (item.id === clickedItemId) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    this.setState({
      todos: newTodos,
    });
  };

  addItem = ({ task, id, completed }) => {
    const newTodo = {
      task: task,
      id: id,
      completed: completed,
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
    });
  };

  //delete item function that will filter through items and for every item, if checked equals true ,
  deleteItem = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.completed),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <div className="erase-btn">
          <button onClick={() => this.deleteItem()}>
            Erase Completed Tasks
          </button>
        </div>
      </div>
    );
  }
}

export default App;
