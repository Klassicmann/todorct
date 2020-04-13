import React from "react";
import "./App.css";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

function App() {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
