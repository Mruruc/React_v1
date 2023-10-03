
import { useState } from "react";

const Form = (props) => {


  const [name, setName] = useState('');

  function handleNameInput(e) {
    setName(e.target.value);
  }

  
 const handleForm = (e) => {
   e.preventDefault();
   props.addUser(name);
   setName('');
 };


  return (
    <div>
      <form className='form' onSubmit={handleForm}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            id='name'
            className='form-input'
            value={name}
            onChange={handleNameInput}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          send
        </button>
      </form>
    </div>
  );
}

export default Form;
