import useGetRequest from './useGetRequest';

const url = 'http://localhost:8080/api/lectures';

const Main = () => {


  const {
    data: lectures,
    isLoading,
    isError,
} = useGetRequest({url});



  

  return (
    <div>
      
      {isLoading && <h2>Loading....</h2>}
      {isError && <h2>{isError}</h2>}

      {lectures.map((lecture) => {
        return <li key={lecture.id}>{lecture.name}</li>;
      })}
    </div>
  );
};

export default Main;
