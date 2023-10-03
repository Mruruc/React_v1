import { data } from '../../data';
import React, { useCallback, useState } from 'react';
import List from './List';


const Main = () => {
  const [users, setUsers] = useState(data);

  const [counter, setCounter] = useState(0);
  console.log(counter);

  const removeUser=useCallback((id)=>{
   const newUsers = users.filter((user) => {
    return user.id !== id;
   });
   setUsers(newUsers);
  },[users]);

  return (
    <div>
      <button className='btn' onClick={() => setCounter(counter + 1)}>
        Click
      </button>
      <List list={users} removeUser={removeUser}/>
    </div>
  );
};

export default Main;
