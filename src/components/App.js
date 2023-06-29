import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header'
import Search from './Search';
import List from './List';
import AddItem from './AddItem';
const App = () =>{
    //перенести стэйт таскс из компонента лист

    const [done, setDone] = useState(0)
   const getTaskHandler= (tasks)=>{
       const count = tasks.reduce((count,item)=>{
        if(item.done == true){
           
            return count +1;
        } else {
            return count;
        }
        
        },0)
        setDone(count);
        
   }
    return ( 
        <div className="todo-app">
    
    <Header todo={3} done={done}/>
    <Search/>
   <List getTasks={(tasks)=>getTaskHandler(tasks)}/>
   <AddItem/>
    </div>
    )
}
export default App;
