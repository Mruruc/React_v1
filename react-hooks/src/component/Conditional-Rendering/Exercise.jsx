import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/Mruruc';

const Exercise = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        
        const response = await fetch(url);
        const user = await response.json();
        console.log(user);

        setUser(user);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.login}</h1>

          <img src={user.avatar_url} alt='Mruruc Profile Photo' />
          <div>
            <a href={user.html_url}>Profile</a>
          </div>
        </div>
      ) : (
        <h1>
          <p>Loading</p>
        </h1>
      )}
    </div>
  );
};

export default Exercise;
