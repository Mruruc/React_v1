import avatar from '../../assets/default-avatar.svg';

const User = ({ images, name, nickName = 'shakeAndBake' }) => {
  //let image = props.images;

   const img = images ?.[0] ?.small ?.url || avatar;
  


  //const img = images &&images[0] && images[0].small && images[0].small.url;

  return (
    <div>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h1>{name}</h1>
      <p>{nickName}</p>
    </div>
  );
};

export default User;
