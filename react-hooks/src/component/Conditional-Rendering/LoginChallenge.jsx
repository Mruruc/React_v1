import { useState } from "react";




const LoginChallenge = () => {

 const [user,setUser]= useState(null);

function logOut(){
  setUser(null);
}
function logIn(){
  setUser({userName:'Mruruc'});
}

  return (
    <div>
      {user ? (
        <div>
          <h1>Hello {user.userName} &#9995;</h1>
          <button className='btn' onClick={logOut}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1>Please Login</h1>
          <button className="btn" onClick={logIn}>Login</button>
        </div>
      )}
    </div>
  );
}

export default LoginChallenge ;
