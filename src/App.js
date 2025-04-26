import { useRef, useState } from "react";
import "./App.css"

function App() {
  let [todos ,setTodos]=useState([]);
  const inputRef=useRef()
  const handleAddTodo=()=>{
    const text=inputRef.current.value;
    const newItem={completed :false , text}
    setTodos([...todos,newItem])
    inputRef.current.value=""
  }
   const handleDeleteItem=(index)=>{
    const newtodos=[...todos]
    newtodos.splice(index,1)
    setTodos(newtodos)
   }
    const handelItemDone=(index)=>{
      const newtodos=[...todos]
      newtodos[index].completed=!newtodos[index].completed
    setTodos(newtodos)
    }
  return (
    <div className="App">
     <h2>To Do List</h2>
     <div className="to-do-container">
     <ul>
     {todos.map(({text , completed},index)=>{
      return<div className="item" ><li className={completed? "done":""} key={index} onClick={()=>handelItemDone(index)} >{text}</li>
        <span onClick={()=>handleDeleteItem(index)} >❌</span>
      </div>
     })}
     </ul>
     <input ref={inputRef} type="text" placeholder="
     enter item...." />
     <button  className="btn"onClick={handleAddTodo} >Add</button>
    
     </div>
    </div>
  );
}

export default App;
