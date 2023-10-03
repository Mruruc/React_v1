import React, { useState } from 'react';
import List from './List';
import { data } from '../../data';
import Form from './Form';
const Main = () => {
  const [users, setUsers] = useState(data);
  users.forEach(user=> console.log(user));

  const addUser = (name) => {
    const obj = { id: users.length + 1, name: name };
    setUsers([...users, obj]);
  };
  return (
    <section>
      <Form addUser={addUser}/>
      <List list={users} />
    </section>
  );
};

export default Main;
