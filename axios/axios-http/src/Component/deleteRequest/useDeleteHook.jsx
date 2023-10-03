import { useState, useEffect } from 'react';
import axios from 'axios';

const useDeleteHook = (props) => {
  const { url } = props;

  const init = { message: '', status: '', timestamp: '' };

  const [data, setData] = useState(init);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!url) {
          setIsError('Provided URL is Empty!');
          setIsLoading(false);
          return;
        }

        const response = await axios(
          ` http://localhost:8080/api/delete-lecture/${url}`,
          {
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
            }
          }
        );

        setData(response.data);

        setIsLoading(false);
        setIsError(null);
      } catch (error) {
        //if request was made and the server responded

        if (error.response && error.response.status !== 200) {
          setIsLoading(false);

          setIsError(
            `Expected Response Status 200. \n The Actual ${error.response.status}. \n About Header: ${error.response.headers}`
          );
        }

        //the request was made but not response was received
        else if (error.request) {
          setIsLoading(false);
          setIsError(
            `The Request was made but NO response was received ! \n
             Error Message: ${error.message}`
          );
        } else {
          // Something happened in setting up the request that triggered an Error
          setIsLoading(false);
          setIsError(
            ` Something happened in setting up the request that triggered an Error: ${error.message}`
          );
          console.log(error);
        }
      }
    };

    fetchData();
  }, [url]);

  return {
    data: data,
    isLoading: isLoading,
    isError: isError,
  };
};

export default useDeleteHook;
