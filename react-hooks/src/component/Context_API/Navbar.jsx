

import React, { createContext, useState } from 'react'
import NavLinks from './Navlinks';

export const NavbarContext=createContext();

const Navbar = () => {
  const [user,setUser]=useState(null);

  function logout(){
    setUser(null);
  }

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className='navbar'>
        <h5>Context API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
}

export default Navbar;
