import React, { useState } from 'react'

const Search = ({onSearch}) => {
const [value, setValue] =  useState('')

  return (
   
    <input
    onChange={(e)=>{setValue(e.target.value); onSearch(e.target.value)}}
    value = {value}
      type="text"
      placeholder="Type to search"
      className="form-control search-input"
    />
    
  
  )
}

export default Search

