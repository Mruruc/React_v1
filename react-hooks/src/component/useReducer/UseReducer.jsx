

import React, { useReducer } from 'react'
import { data } from '../../data';
import reducer from './reducer';
import { CLEAR_LIST, REMOVE_USER, RESET_LIST } from './action_type';




const UseReducer = () => {

  const initialState = {
    users: data,
    isLoading: false,
  };
 
 const [state,dispatch] = useReducer(reducer,initialState);

  function removeUser(userId) {
    dispatch({ type: REMOVE_USER , payload:{id:userId}});
  }

  function clearAll() {
    dispatch( { type: CLEAR_LIST } );
  }

  function reset() {
    dispatch( { type: RESET_LIST} );
  }

  return (
    <div>
      <h2>User List:</h2>
      {state.users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <button className='btn' onClick={() => removeUser(user.id)}>
            Remove
          </button>
        </div>
      ))}

      {state.users.length < 1 ? (
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
};

export default UseReducer;