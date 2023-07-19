import React,{useState} from 'react'

const Filter = ({onFilter}) => {

  const[active,setActive] = useState(0)
  const btns = ['All','Active','Done'];
 

 
  const btnsOut = btns.map((el,ind)=>(
    active == ind ?
    <button onClick={()=>{setActive(ind); onFilter(ind)}} key={ind} type="button" className="btn btn-info">
    {el}</button>
    :
    <button onClick={()=>{setActive(ind);onFilter(ind)}} key={ind} type="button" className="btn btn-outline-secondary">
    {el}</button>
    
  ));

  return (
    <div className="btn-group">
    {btnsOut}
    
  </div>
  )
}

export default Filter