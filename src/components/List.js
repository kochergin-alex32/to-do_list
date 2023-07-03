import React, { useState } from 'react'
import ListItem from './ListItem'

const List = ({ tasks, onImportant, onDone, onDeleteItem}) => {
  
  const styles ={color: 'black', fontWeight: 'normal'}
 
 


 

  


  


const items = tasks.map(item =>(
  <ListItem 
  key={item.id}
   item={item}
    // onDeleteItem={(id)=>deleteItemHendler()}
    // onDeleteItem={(id)=>deleteItemHendler(id)}
    onDeleteItem={onDeleteItem}
    onDone={onDone}
    onImportant={onImportant}
   
    />
 
))




  return (
    <ul className="list-group todo-list">
    
      {items}
     
    
  </ul>
  )
}

export default List