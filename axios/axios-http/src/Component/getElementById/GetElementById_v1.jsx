import { useState, useEffect } from 'react';
import axios from 'axios';

const GetElementById_v1 = () => {

  const [id, setId] = useState(0);
  const [url, setUrl] = useState('');
  const [lecture, setLecture] = useState({ id, name });

  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const handleInput = (e) => {
    setId(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setUrl(`http://localhost:8080/api/lecture-byId/${id}`);
    setId(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setLecture(response.data);
        setLoading(false);
        setIsError('');
      } catch (error) {
        //if request was made and the server responded

        if (error.response && error.response.status !== 200) {
          setLoading(false);

          setIsError(
            `Expected Response Status 200. \n The Actual ${error.response.status}. \n About Header: ${error.response.headers}`
          );
        }

        //the request was made but not response was received
        else if (error.request) {
          setLoading(false);
          setIsError(
            `The Request was made but NO response was received ! \n
             Error Message: ${error.message}`
          );
        } else {
          // Something happened in setting up the request that triggered an Error
          setLoading(false);
          setIsError(
            ` Something happened in setting up the request that triggered an Error: ${error.message}`
          );
          console.log(error);
        }
      }
    };
    fetchData();
  }, [url]);


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

export default GetElementById_v1;
