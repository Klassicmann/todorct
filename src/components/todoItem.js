import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    const { id, title, handleDelet, handleEdit } = this.props;
    return (
      <div>
        <li className="list-group-item mt-3">
          <div className="row ">
            <h5 className="col-8"> {title}</h5>
            <button
              className="btn btn-sm btn-primary col-2"
              onClick={() => handleEdit(id)}
            >
              i
            </button>
            <button
              className="btn btn-sm btn-danger col-2"
              onClick={() => handleDelet(id)}
            >
              c
            </button>
          </div>
        </li>
      </div>
    );
  }
}

export default TodoItem;
