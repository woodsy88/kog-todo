import React, { Component } from 'react'
import {FaPaperPlane, FaBook} from "react-icons/fa";

export default class TodoForm extends Component {
  render() {

    const { item, editItem, handleChange, handleSubmit } = this.props;

    let disableButton = true;

    if (item !== '') {
      disableButton = false
    }

    return (
    <div className="card my-3">
      <div className={editItem ? "card-body border border-success" : "card-body"}
        >
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className={`input-group-text bg-${ editItem ? "success" : "primary"} text-white`}>
                <FaBook />
              </div>
            </div>
            <input onChange={handleChange} value={item} type="text" className="form-control text-capitalize" placeholder="Enter todo"/>
          </div>
          <button disabled={disableButton} type="submit" className={`btn btn-block btn-${ editItem ? "success" : "primary"} mt-3`}>
            <FaPaperPlane className="mr-1"/> { editItem ? "edit todo" : "add to do"}
          </button>
        </form>
      </div>
    </div>
    )
  }
}
