

const UserContainer = (props) => {
  const { user, logout } = props;
  return (
    <div className='user-container'>

      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <button className='btn'>Login</button>
      )}

    </div>
  );
};

export default UserContainer;
