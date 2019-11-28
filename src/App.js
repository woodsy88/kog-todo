import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import uuid from 'uuid';

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {

  state = {
    items: [],
    id: 0,
    item: '',
    editItem: false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      title: this.state.item
    };

    const upDatedItems = [...this.state.items, newItem];

    this.setState({
      items: upDatedItems,
      item: "",
      editItem: false
    });
    
  }

  handleChange = (e) => {
    this.setState({ 
      item: e.target.value
    })
  }

  clearList = () => {
    this.setState({ 
      items: []
    }) 
  }
  
  handleDelete = (id) => {
    const { items } = this.state;
    const tempItems = items.filter((item) => item.id !== id);
    this.setState({ items: tempItems})  
  }

  handleEdit = (id) => {
    console.log(`edit ran on ${id}`);
    const {items} = this.state;
    const editItem = items.find((item) => item.id === id);
    console.log(editItem);

    const tempItems = items.filter((item) => item.id !== id);

    this.setState({
      item: editItem.title,
      items: tempItems,
      editItem: true,
      id
    })
    
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
              Todos
            </h3>
            <TodoForm 
              handleChange={this.handleChange}
              item={this.state.item} 
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList 
              handleDelete={this.handleDelete}
              items={this.state.items} 
              clearList={this.clearList}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );}
}

export default App;
