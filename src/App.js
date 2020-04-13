import React from "react";
import "./App.css";
import uuid from "uuid";

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
