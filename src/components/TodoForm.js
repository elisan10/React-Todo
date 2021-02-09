import React from "react";
// Form will hold:
// imput field -> takes in user input
// add button -> adds as todo to your list
// ** add a function that will toggle between true and false when todo is clicked
// clear button -> use .filter to clear any true toggles

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
      id: Date.now(),
      completed: false,
    };
  }

  handleChanges = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
  };

  render() {
    return (
      <div className="todo-form">
        <form onSubmit={this.handleSubmit}>
          <div className="todo-input">
            <input
              type="text"
              name="task"
              placeholder="Add a Task..."
              value={this.state.task}
              onChange={this.handleChanges}
            />
          </div>
          <div className="submit-btn">
            <button>Submit Task</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
