import useFetch from './useFetch';

const url = 'https://api.github.com/users/Mruruc';

const Test = () => {
  const {data:user,isLoading,isError}=useFetch(url);
  return (
    <>
      <h1>User Profile:</h1>
      <div>
        {user && (
          <div>
            <h1>{user.login}</h1>

            <img src={user.avatar_url} alt='Mruruc Profile Photo' />
            <div>
              <a href={user.html_url}>Profile</a>
            </div>
          </div>
        )}
      </div>
      <div>{isLoading && <h1>Loading...</h1>}</div>
      <div>{isError && <h2>Error.....</h2>}</div>
    </>
  );
};

export default Test;
