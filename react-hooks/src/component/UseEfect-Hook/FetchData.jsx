import { useEffect, useState } from "react";


const url='https://api.github.com/users';

const FetchData = () => {

  const [users,setUsers]=useState([]);

  useEffect(()=>{

    const fetchData= async()=>{

      const response= await fetch(url);
      const users=await response.json();
      setUsers(users);

    };
    
    fetchData();
  },[]);

  return (
    <div>
      <h1>Github Users </h1>
      <ul className="users">

        {users.map((user) => {
          return (
            <li key={user.id}>
              <img
                src={user.avatar_url}
                alt='users profile photo'
                className='style-img'
              />
              <div>
                <h5>{user.login}</h5>
                <a href={user.html_url}>Profile</a>
              </div>
            </li>
          );
        })}
        
      </ul>
    </div>
  );
}

export default FetchData;
