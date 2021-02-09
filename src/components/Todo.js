import React from "react";
import "./Todo.css";
// This component will take in todo data and display the tasks on the screen

const Todo = ({ item, toggleTodo }) => {
  //   console.log("We are in the todo", item);
  return (
    <div
      onClick={() => {
        toggleTodo(item.id);
      }}
      className={`item${item.completed ? "-completed" : ""}`}
    >
      <p> ~ {item.task}</p>
    </div>
  );
};

export default Todo;
