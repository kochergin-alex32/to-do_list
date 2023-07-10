import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header'
import Search from './Search';
import List from './List';
import AddItem from './AddItem';
const App = () =>{
    //перенести стэйт таскс из компонента лист

    const initialData = [
        {id:1, title:'to drink coffe ', done:true, important:true},
        {id:2, title:'to wach car ', done:false, important:false},
        {id:3, title:'to do app', done:true, important:false},
      ]
      let [tasks, setTasks] = useState(initialData);
       

    // const [done, setDone] = useState(0)
//    const getTaskHandler= (tasks)=>{
//        const count = tasks.reduce((count,item)=>{
//         if(item.done == true){
           
//             return count +1;
//         } else {
//             return count;
//         }
        
//         },0)
//         setDone(count);
       
        
//    }


   const importantHandler = (id)=>{
    const ind = tasks.findIndex(item =>{
        return item.id ==id;
      })
   
      // изменение стиля important
      let newTasks = [...tasks];
      newTasks[ind].important = !newTasks[ind].important;
      setTasks(newTasks)
}


    const doneHandler = (id)=>{
    const ind = tasks.findIndex(item =>{
        return item.id ==id;
    });
    let newTasks = [...tasks];
    newTasks[ind].done = !newTasks[ind].done;
    setTasks(newTasks);
  
    
    }

    const deleteItemHandler = (id)=>{
        const ind = tasks.findIndex(item =>{
          return item.id ==id;})
          let newTasks = [...tasks];
          newTasks.splice(ind,1);
          setTasks(newTasks);
         
       }
 

const done = tasks.reduce((count,item)=>{
            if(item.done == true){
               
                return count +1;
            } else {
                return count;
            }
            
            },0)

const todo = tasks.length - done
// console.log(todo);
const addItemHandler = (title)=>{
    const id = tasks[tasks.length-1].id +1
    console.log(id);
  const newTask =  {id:id, title:title, done:false, important:false}
  const newTasks=[...tasks]
  newTasks.push(newTask)
  setTasks(newTasks)
}
const filterHandler = (type) =>{
    let newTasks, filteredTasks
    switch (type) {
        case 0:
            return tasks
           
            case 1:
            newTasks = [...tasks]
            filteredTasks = newTasks.filter((el)=>{
                return el.done == false;
            })
            
           
        case 2:
            newTasks = [...tasks]
            filteredTasks = newTasks.filter((el)=>{
                return el.done == true;
            })
           
    
        
    }
    console.log(filterHandler);
}
    return ( 
        <div className="todo-app">
    
    <Header todo={todo} done={done}/>
    <Search onFilter={(type)=>filterHandler(type)}/>
   <List 
            tasks = {tasks}
            onImportant = {(id) => importantHandler(id)}
            onDone = {(id)=> doneHandler(id)}
            onDeleteItem ={(id)=> deleteItemHandler(id)}
   />
   <AddItem onAdd={(title)=>addItemHandler(title)}/>
    </div>
    )
}
export default App;
