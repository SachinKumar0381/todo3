import React, { useState } from 'react'
import Todos from './Todos'
import Done from './Done'
const Input = () => {
    let [newTodo,setTodo]=useState("");
    const[todos,setTodos]=useState([]);
    const[done,setDone]=useState([]);
  const handleChange=(e)=>{
      setTodo(e.target.value);
  }
  
  const onDelete=(id)=>{
      let newDone=todos.filter((todo)=> todo.id==id);
      setDone([...done, newDone[0]]);
    
    let newTodos=todos.filter((todo)=> todo.id !== id);
    setTodos(newTodos)
  }

  const onClick=(id)=>{
    let newDone=done.filter((dose)=> dose.id!==id);
    setDone(newDone);
  }

  return (
    <div>
        <input placeholder='Enter Todo...' type="text" onChange={handleChange} value={newTodo}/>
        <button onClick={()=>{
            setTodos([
                ...todos,
                {
                    id : Date.now(),
                    value : newTodo,
                    isCompleted : false
                }
            ])
            setTodo("");
        }}>Add</button>
        {todos.map((todo)=>(
            <Todos todo={todo} onDelete={onDelete}/>
        ))}
        <div><h2>Completed Tasks</h2></div>
         {done.map((dose)=>(
             <Done dose={dose} onClick={onClick}/>
         ))}
    </div>
  )
}

export default Input