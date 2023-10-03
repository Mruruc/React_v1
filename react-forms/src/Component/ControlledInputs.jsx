import { useState } from "react";

const ControlledInputs = () => {
  
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');

function handleNameInput(e){
  setName(e.target.value);
  
}

function handleEmailInput(e){
  setEmail(e.target.value);
}

function handleFormSubmit(e){
  e.preventDefault();
  console.log(name,email);
}


  return (
    <form className='form' onSubmit={handleFormSubmit}>
      <h4>Controlled inputs:</h4>

      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          Name:
        </label>
        <input type='text' id='name' className='form-input' value={name} onChange={handleNameInput}/>
      </div>

      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Email:
        </label>
        <input type='email'
               id='email' 
               className='form-input' 
               value={email}
               onChange={handleEmailInput}/>
      </div>

      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>
  );
};

export default ControlledInputs;
