import { useState } from 'react';
import { userList } from '../data';


const MultipleInput = () => {
  const [users, setUsers] = useState(userList);

  const [newUser, setNewUser] = useState({
    id: '',
    userName: '',
    email: '',
    password: ''
  });

  

  const handleInput = (e) => {

    const newId = users.length + 1;
    //setNewUser({...newUser,id:newId});
     setNewUser({ ...newUser, [e.target.name] : e.target.value});
     console.log(newUser);
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newUserss=[...users,newUser];
    setUsers(newUserss);
  };

const removeUser=(id)=>{
  const updatedUsers=users.filter((user)=> user.id !== id);
  setUsers(updatedUsers);
}

  return (
    <div>
      <form className='form' onSubmit={handleFormSubmit}>
        <h4>Add User</h4>

        <div className='form-row'>
        
          <input
            type='number'
            value={users.length+1}
            onChange={handleInput}
            name='id'
            disabled
            hidden
          />
        </div>
        <div className='form-row'>
          <label htmlFor='userName' className='form-label'>
            User Name:
          </label>
          <input
            type='text'
            id='userName'
            className='form-input'
            value={newUser.userName}
            onChange={handleInput}
            name='userName'
          />
        </div>

        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email:
          </label>
          <input
            type='email'
            id='email'
            className='form-input'
            value={newUser.email}
            onChange={handleInput}
            name='email'
          />
        </div>

        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password:
          </label>
          <input
            type='password'
            id='password'
            className='form-input'
            value={newUser.password}
            onChange={handleInput}
            name='password'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>

      <h2>Users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.userName}</h4>
            <h5>{user.email}</h5>
            <h4>{user.password}</h4>

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

export default MultipleInput;
