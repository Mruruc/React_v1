import { useState } from "react";
import useDeleteHook from "./useDeleteHook";


const Delete = () => {

  const [id, setId] = useState(0);
  const [url, setUrl] = useState('');

  const handleInput = (e) => {
    setId(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setUrl(`${id}`);
    setId(0);
  };

 const {data:response ,isLoading,isError}= useDeleteHook({url});

  return (
    <div>
      <div>
        <form className='form' onSubmit={handleForm}>
          <input
            type='number'
            value={id}
            className='form-input'
            onChange={handleInput}
          />
          <button type='submit' className='btn btn-block'>
            Search
          </button>
        </form>

        {response && (
          <div>
            <h1>Message: {response.message}</h1>
            <h1>Status: {response.status}</h1>
            <h1>Time Stamp: {response.timestamp}</h1>
          </div>
        )}

        {isLoading && <h1>Loading.....</h1>}

        {isError && <h1>{isError}</h1>}
      </div>
    </div>
  );
};

export default Delete;