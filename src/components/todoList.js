import React, { Component } from "react";
import TodoItem from "./todoItem";

export class TodoList extends Component {
  render() {
    const { items, handleDelet, clearList, handleEdit } = this.props;

    return (
      <div>
        <ul className="list-group">
          <h3>
            {items.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  handleDelet={() => handleDelet(item.id)}
                  handleEdit={() => handleEdit(item.id)}
                >
                  Your Item{" "}
                </TodoItem>
              );
            })}
          </h3>
          <hr />
        </ul>
        <button className="btn btn-block btn-danger" onClick={clearList}>
          {" "}
          Clear List
        </button>
      </div>
    );
  }
}

export default TodoList;
