import React, { Component } from 'react'
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

export default class TodoItem extends Component {
  
  render() {
    
    const { title, id, handleDelete, handleEdit } = this.props;

    return (
    <div>
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success">
          <FaPencilAlt onClick={() => {handleEdit(id)}} />
          </span>
          <span className="mx-2 text-danger">
            <FaTrashAlt onClick={() => handleDelete(id)} />
          </span>
        </div>
      </li>
    </div>
    )
  }
}
