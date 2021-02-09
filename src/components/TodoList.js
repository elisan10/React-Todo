import React from "react";
import Todo from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// receives todos array and iterates over the list
// it will generate a new <Todo /> for each of element in the array

const TodoList = ({ todos, toggleTodo }) => {
  console.log("This is todos in list", todos);
  return (
    <div className="todo-list">
      {todos.map((item) => (
        <Todo key={item.id} item={item} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;
