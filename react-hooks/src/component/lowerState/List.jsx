
import React from 'react'
import Person from './Person'

const List = (props) => {
  return (
    <div>
      {
        props.list.map((user)=>{
          return <Person key={user.id} name={user.name} />;
        })
      }
    </div>
  )
}

export default List;
