import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [isError, setIsError] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          setIsLoading(false);
          setIsError(true);
          throw new Error('Received Data Is Not Valid!');
        }

        return response.json();
      })
      .then((_data) => {
        setData(_data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [url]);

  return {
    data: data,
    isLoading: isLoading,
    isError: isError,
  };
};

export default useFetch;
