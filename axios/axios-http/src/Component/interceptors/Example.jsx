import { useState } from 'react';
import useGetConfig from './useGetConfig'; 
const Example = () => {

  const[id, setId] = useState(0);
  const [url, setUrl] = useState('');
  

  const handleInput = (e) => {
    setId(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setUrl(`${id}`);
    setId(0);
  };

  const { data: lecture, isLoading, isError } = useGetConfig({ url });
  
  return (
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

      {lecture && (
        <div>
          <h1>ID: {lecture.id}</h1>
          <h1>Lecture Name: {lecture.name}</h1>
        </div>
      )}

      {isLoading && <h1>Loading.....</h1>}

      {isError && <h1>{isError}</h1>}
    </div>
  );
};

export default Example;
