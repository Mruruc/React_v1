

import React, { useState } from 'react'
import NavLinks from './Navlinks';

const Navbar = () => {
  const [user,setUser]=useState(null);

  function logout(){
    setUser(null);
  }

  return (
   <nav className='navbar'>
    <h5>Context API</h5>
    <NavLinks user={user} logout={logout}/>
   </nav>
  )
}

export default Navbar;
