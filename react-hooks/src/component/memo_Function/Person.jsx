
import React from 'react'

const Person = ({name,id,removeUser}) => {
  return (
    <div>
      <h4>{name}</h4>
      <button className='btn' onClick={()=>{removeUser(id)}}>Remove</button>
    </div>
  )
}

export default Person;
