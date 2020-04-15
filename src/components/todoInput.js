import React, { Component } from "react";

export class TodoInput extends Component {
  render() {
    const { item, editItem, handleChange, handleSubmit } = this.props;

    return (
      <div>
        <div className="section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                value={item}
                name="item"
                placeholder="add todo"
              />
            </div>
            <button
              className="btn btn-block btn-success"
              disabled={item ? false : true}
            >
              {editItem ? "EDIT ITEM" : "ADD ITEM"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoInput;
