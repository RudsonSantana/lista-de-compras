import React, { Component } from "react";
import './Main.css';
import Form from "./Form";
import List from "./List";

export default class Main extends Component {
  state = {
    newItem: '',
    items: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { items, index } = this.state;
    let { newItem } = this.state;
    newItem = newItem.trim();

    if (items.indexOf(newItem) != -1) return;

    const newItems = [...items];

    if (index === -1) {
      this.setState({
        items: [...newItems, newItem],
        newItem: '',
        index: -1,
      });
    } else {
      newItems[index] = newItem;
      this.setState({
        items: [...newItems],
        newItem: '',
        index: -1,
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      newItem: e.target.value,
    });
  }

  handleDelete = (e, index) => {
    const { items } = this.state;
    const newItems = [...items];
    newItems.splice(index, 1);

    this.setState({
      items: [...newItems]
    })
  }

  handleEdit = (e, index) => {
    const { items } = this.state
    this.setState({
      index,
      newItem: items[index],
    });
  }

  componentDidMount() {
    const items = JSON.parse(localStorage.getItem('items'));

    if (!items) return;

    this.setState({ items });
  }

  componentDidUpdate(prevProps, prevState) {
    const { items } = this.state;

    if (items === prevState.items) return;

    localStorage.setItem('items', JSON.stringify(items));
  }

  render() {
    const { newItem, items } = this.state;

    return (
      <div className="main">
        <h1>Lista de Compras</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newItem={newItem}
        />

        <List
          items={items}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}
