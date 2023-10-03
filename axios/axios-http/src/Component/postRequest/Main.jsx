import axios from 'axios';
import { useState } from 'react';
import sendData from './postRequest';

const url = 'http://localhost:8080/api/add-lecture';

const Main = () => {

  const [name, setName] = useState('');

  const [isError, setIsError] = useState(null);

  const initialValue={id:'', name: '', statusCode:''};

  const [isSent, setIsSent] = useState(initialValue );


const nameInput = (e) => setName(e.target.value);

  const formSubmit = (e) => {
    e.preventDefault();
    sendData(url,name,setIsSent,setIsError);
    setName('');
  };

  return (
    <div>
      {isError && <h1>{isError}</h1>}
      <h2>Post Request:</h2>

      <form className='form' onSubmit={formSubmit}>
        <div className='row'>
          <label htmlFor='name'>Lecture Name:</label>

          <input
            type='text'
            className='form-input'
            value={name}
            onChange={nameInput}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          Save
        </button>
      </form>
      
      {isSent && (
        <div>
          <h2>
            Saved Data: <br /> {'ID: '+ isSent.id + ' , '  + 'Lecture Name: ' + isSent.name} <br />{' '}
          </h2>

          <h1>Status Code: {isSent.statusCode}</h1>
        </div>
      )}
    </div>
  );
};

export default Main;
