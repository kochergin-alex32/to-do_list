import React, { useState } from 'react'
import ListItem from './ListItem'

const List = () => {
  const initialData = [
    {id:1, title:'to drink coffe ', done:true, important:true},
    {id:2, title:'to wach car ', done:false, important:false},
    {id:3, title:'to do app', done:true, important:false},
  ]
  let [tasks, setTasks] = useState(initialData);
   
  const styles ={color: 'black', fontWeight: 'normal'}
 
  const importantHandler = (id) =>{
    // console.log(tasks);
    const ind = tasks.findIndex(item =>{
      return item.id ==id;
    })
 
    // изменение стиля important
    let newTasks = [...tasks];
    newTasks[ind].important = !newTasks[ind].important;
    setTasks(newTasks);
    // тоже самое
    // let newTasks = tasks.map(item=>{
    //   return item;
    // })
    // newTasks[ind].important = !newTasks[ind].important;
    // setTasks(newTasks);


  }

  // функция для зачекивания и удаления зачеркивания на надписях
const doneHandler = (id) =>{
  const ind = tasks.findIndex(item =>{
    return item.id ==id;
  });
  let newTasks = [...tasks];
  newTasks[ind].done = !newTasks[ind].done;
  setTasks(newTasks);
}
 
 const deleteItemHendler = (id)=>{
  const ind = tasks.findIndex(item =>{
    return item.id ==id;})
    let newTasks = [...tasks];
    newTasks.splice(ind,1);
    setTasks(newTasks);
    console.log(tasks);
 }
  
 
 
  


const items = tasks.map(item =>(
  <ListItem 
  key={item.id}
   item={item}
    // onDeleteItem={(id)=>deleteItemHendler()}
    // onDeleteItem={(id)=>deleteItemHendler(id)}
    onDeleteItem={deleteItemHendler}
    />
 
))

// const add = ()=>{
//   let newCount = count++;
//   setCount(newCount)
// }

// let number = count;

// console.log('count'+number);



  return (
    <ul className="list-group todo-list">
    
      {items}
     
    
  </ul>
  )
}

export default List