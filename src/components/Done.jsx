import React from 'react'

const done = ({dose, onClick}) => {
  return (
    <div key={dose.id} className="flex">
      <div>{dose.value}</div>
      <button onClick={()=>onClick(dose.id)}>x</button>
    </div>
  )
}

export default done
