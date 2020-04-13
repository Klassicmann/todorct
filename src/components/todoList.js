import React, { Component } from "react";
import TodoItem from "./todoItem";

export class TodoList extends Component {
  render() {
    return (
      <div>
        <h4 className="text-primary"> Todo List</h4>
        <TodoItem />
      </div>
    );
  }
}

export default TodoList;
