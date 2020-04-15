import React, { Component, Fragment } from "react";
import "./App.css";
import { v1 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

export class App extends Component {
  state = {
    items: [
      { id: 1, title: "Home wrok" },
      { id: 2, title: "Code" },
      { id: 3, title: "Play" },
      { id: 4, title: "Sleep" },
    ],
    item: "",
    editItem: false,
    id: uuid(),
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState(
      {
        items: updatedItems,
        item: "",
        editItem: false,
        id: uuid(),
      },
      () => console.log(this.state)
    );
  };
  handleEdit = (id) => {
    // const filterdItems = this.state.items.filter((item) => item.id !== id);
    const editingItem = this.state.items.find((item) => item.id === id);

    this.setState({
      // items: filterdItems,
      item: editingItem.title,
      id: id,
      editItem: true,
    });
  };
  handleDelet = (id) => {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id),
    });
  };
  clearList = () => {
    this.setState({
      items: [],
      item: "",
    });
  };

  render() {
    const { items, item, editItem } = this.state;

    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h2 className="text-captalized text-center text-success">
                Todo Rct
              </h2>
              <TodoInput
                item={item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={editItem}
              />
              <TodoList
                items={items}
                handleDelet={this.handleDelet}
                handleEdit={this.handleEdit}
                clearList={this.clearList}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
