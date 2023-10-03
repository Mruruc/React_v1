

const Person = (props) => {

  const {photo,name,age}=props;

  return (
    <>

      <img src={photo} alt='photo description' />
      <h4>{name}</h4>
      <p>{age} years</p>

    </>
  );
}

export default Person;
