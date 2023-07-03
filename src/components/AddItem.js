import React from 'react'
import ReactDOM from 'react-dom/client';

const AddItem = ({onAdd}) => {
  // const inp = document.querySelector('input')
  const title = 'test'
  return (
    <form className="item-add-form d-flex">
          <input
          id="addTitle"
            type="text"
            className="form-control"
            placeholder="What needs to be done"
           
          /><button 
          onClick={()=>onAdd(title)}
          className="btn btn-outline-secondary col-3">Add Item</button>
        </form>
  )
}

export default AddItem