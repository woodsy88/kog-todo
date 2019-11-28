import React, { Component } from 'react';
import TodoItem from '../components/TodoItem';
import { FaTrashAlt } from 'react-icons/fa';

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;


    return (
      <div>
        <ul className="list-group my-5">
          { items.length > 0 && <h3 className="text-capitalize text-center">ToDo List</h3>}
         {
           items.map((item) => <TodoItem 
                                  handleDelete={handleDelete}
                                  handleEdit={handleEdit}
                                  title={item.title} 
                                  id={item.id}
                                  key={item.id}/> )
         }
        {
          items.length > 0 &&
              <button
            onClick={clearList}
            type="button"
            className="btn btn-danger btn-block text-capitalize mt-5">
            <FaTrashAlt className="mr-2"  />
            Clear List
          </button>
        }
        </ul>
      </div>
    );
  }
}
