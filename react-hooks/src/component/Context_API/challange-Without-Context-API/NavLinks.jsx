import UserContainer from "./UserContainer";


const NavLinks = (props) => {
  return (
    <div className='nav-container'>
      <ul className='nav-links'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
      </ul>
      <UserContainer user={props.user} logout={props.logout}/>
    </div>
  );
};

export default NavLinks;
