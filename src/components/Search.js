import React, { useState } from 'react'

const Search = ({onFilter}) => {
  const[active,setActive] = useState(0)
  const btns = ['All','Active','Done'];
  // const btnClickHandler = (ind) => {
  //   setActive(ind); onFilter(active)
  // }

 
  const btnsOut = btns.map((el,ind)=>(
    active == ind ?
    <button onClick={()=>{setActive(ind); onFilter(active)}} key={ind} type="button" className="btn btn-info">
    {el}</button>
    :
    <button onClick={()=>setActive(ind)} key={ind} type="button" className="btn btn-outline-secondary">
    {el}</button>
    // <button onClick={()=>btnClickHandler(ind)} key={ind} type="button" className="btn btn-outline-secondary">
    // {el}</button>
  ));

  return (
    <div className="top-panel d-flex">
    <input
      type="text"
      placeholder="Type to search"
      className="form-control search-input"
    />
    <div className="btn-group">
      {btnsOut}
      {/* <button type="button" className="btn btn-info">All</button>
      <button type="button" className="btn btn-outline-secondary">
        Active</button>
        <button type="button" className="btn btn-outline-secondary">
        Done
      </button> */}
    </div>
  </div>
  )
}

export default Search

