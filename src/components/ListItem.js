








import React,{useState} from 'react'

const ListItem = ({item,initialData, onDeleteItem }) => {
  // let [tasks, setTasks] = useState(initialData);

//   const importantHandler = (id) =>{
//     // console.log(tasks);
//     const ind = tasks.findIndex(item =>{
//       return item.id ==id;
//     })
 
//     // изменение стиля important
//     let newTasks = [...tasks];
//     newTasks[ind].important = !newTasks[ind].important;
//     setTasks(newTasks);
//     // тоже самое
//     // let newTasks = tasks.map(item=>{
//     //   return item;
//     // })
//     // newTasks[ind].important = !newTasks[ind].important;
//     // setTasks(newTasks);


//   }

//   // функция для зачекивания и удаления зачеркивания на надписях
// const doneHandler = (id) =>{
//   const ind = tasks.findIndex(item =>{
//     return item.id ==id;
//   });
//   let newTasks = [...tasks];
//   newTasks[ind].done = !newTasks[ind].done;
//   setTasks(newTasks);
// }
 
//  const deleteItemHendler = (id)=>{
//   const ind = tasks.findIndex(item =>{
//     return item.id ==id;})
//     let newTasks = [...tasks];
//     newTasks.splice(ind,1);
//     setTasks(newTasks);
//     console.log(tasks);
//  }
  

   
  return (
    <li  className="list-group-item">
    <span className={`todo-list-item ${item.important?'important':''} ${item.done?'done':''}`}
      >


        {/* <span
          onClick={()=>doneHandler(item.id)}
        className="todo-list-item-label "
       
        >{item.title}</span>
     
         <button
       onClick={()=>importantHandler(item.id)}
        type="button"
        className="btn btn-outline-success btn-sm float-end"
      >
        <i className="fa fa-exclamation"></i></button> */}
      <button
      onClick={()=>onDeleteItem(item.id)}
        type="button"
        className="btn btn-outline-danger btn-sm float-end"
      >
        <i className="fa fa-trash"></i></button
    >
    </span>
   </li> 
  )
}

export default ListItem