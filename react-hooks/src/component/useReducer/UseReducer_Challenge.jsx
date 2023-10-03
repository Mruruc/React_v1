import React, { useState } from 'react'
import { data } from '../../data';

const UseReducer_Challenge = () => {

 const[users,setUsers]= useState(data);

 function removeUser(userId){
  const newUsers=users.filter((user)=>user.id !== userId);
  setUsers(newUsers);
 }

 function clearAll(){
  setUsers([]);
 }

 function reset(){
  setUsers(data);
 }

  return (
    <div>
      <h2>User List:</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <button className='btn' onClick={() => removeUser(user.id)}>
            Remove
          </button>
        </div>
      ))}

      {users.length < 1 ? (
        <button className='btn' onClick={reset}>
          Reset
        </button>
      ) : (
        <button className='btn' onClick={clearAll}>
          Clear All
        </button>
      )}
    </div>
  );
}

export default UseReducer_Challenge;
