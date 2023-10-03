import React, { useState } from 'react';
import { data } from '../data';

const UserChallenge = () => {
  const [userName, setUserName] = useState('');

  const [users, setUser] = useState(data);

  function handleNameInput(e) {
    setUserName(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    //if input value is null or empty string return;
    if (!userName) return;

    //set dynamic id:
    const newUserId = users.length + 1;

    //setting new user:
    const newUser = { id: newUserId, name: userName };

    const updatedUser = [...users, newUser];

    setUser(updatedUser);

    setUserName('');
  }

  const removeUser = (id) => {
    const filteredList = users.filter((person) => {
     return person.id !== id;
    });

    setUser(filteredList);
  };

  return (
    <div>
      <form className='form' onSubmit={handleFormSubmit}>
        <h4>Add User</h4>

        <div className='form-row'>
          <label htmlFor='userName' className='form-label'>
            User Name:
          </label>
          <input
            type='text'
            id='userName'
            className='form-input'
            value={userName}
            onChange={handleNameInput}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
      {/*Rendering list */}

      <h2>Users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4 style={{ textAlign: 'center' }}>{user.name}</h4>

            <button
              type='button'
              className='btn'
              onClick={() => removeUser(user.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UserChallenge;
