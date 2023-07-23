import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header'
import Search from './Search';
import List from './List';
import AddItem from './AddItem';
import Filter from './Filter'
const App = () =>{
    

    const initialData = [
        {id:1, title:'to drink coffe ', done:true, important:true},
        {id:2, title:'to wach car ', done:false, important:false},
        {id:3, title:'to do app', done:true, important:false},
      ]
    
      
      let [tasks, setTasks] = useState(initialData);
       
      const[filter,setFilter] = useState(0);
      const [value, setValue] = useState('');
   


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

const addItemHandler = (title)=>{
    const id = tasks[tasks.length-1].id +1
    console.log(id);
  const newTask =  {id:id, title:title, done:false, important:false}
  const newTasks=[...tasks]
  newTasks.push(newTask)
  setTasks(newTasks)
}
const filterHandler = (type=0, value='') =>{

   
    //   const newArr =  Array.map(element =>{
    //     if(element.title.includes(value)){

    //     }
    //   });

    //      console.log(newArr);


    let  filteredTasks
    switch (type) {
        case 0:
            filteredTasks = tasks.filter((el)=>{
                return  el.title.toLowerCase().includes(value.toLowerCase());
            })
            return filteredTasks ;
           
            case 1:
            // newTasks = [...tasks]
            filteredTasks = tasks.filter((el)=>{
                return el.done == false && el.title.toLowerCase().includes(value.toLowerCase());
            })
           return filteredTasks 
           
        case 2:
            // newTasks = [...tasks]
            filteredTasks = tasks.filter((el)=>{
                return el.done == true && el.title.toLowerCase().includes(value.toLowerCase());
            })
            return filteredTasks 
           
    
        
    }
  
}

    let filteredTasks =  filterHandler(filter,value)

    return ( 
        <div className="todo-app">
    <Header todo={todo} done={done}/>
      <div className="top-panel d-flex">
        {/* <Search onSearch={(value)=> {filteredTasks = filterHandler(filter,value)}}/> */}
        <Search onSearch={(value)=> {setValue(value)}}/>
        <Filter onFilter={(type)=> {setFilter(type)}}/>
      </div>





   <List 
            tasks = {filteredTasks}
            onImportant = {(id) => importantHandler(id)}
            onDone = {(id)=> doneHandler(id)}
            onDeleteItem ={(id)=> deleteItemHandler(id)}
            
   />
   <AddItem onAdd={(title)=>addItemHandler(title)}/>
    </div>
    )
}
export default App;
