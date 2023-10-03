import React from 'react';

const Header = (props) => {
  return (
    <header>

      <h1>Hello From Birthday Buddy &#127874;</h1>
      <h2>{props.length} Birthdays today </h2>
      
    </header>
  );
};

export default Header;
