import React from 'react'

const Todos = ({todo, onDelete}) => {
  return (

    <div key={todo.id} className="flex">
     <button onClick={()=>onDelete(todo.id)}>com</button>
    <div>{todo.value}</div>
    </div>
  )
}

export default Todos