import { useState } from "react";

const UseStateObject2 = () => {
  const person = {
    id: 1,
    fName: 'John',
    lName: 'Doe',
    dob: new Date(),
  };

const [data,setData]=useState(person);

  function handleForm(e){
    e.preventDefault();

    const newFirstName=document.getElementById('fname').value;
    const newLastName = document.getElementById('lname').value;
    let newDOB = document.getElementById('dob').value;

    newDOB=new Date(newDOB);
    console.log(newFirstName.toString());
    console.log(newLastName.toString());
    console.log(newDOB.toDateString());

    setData({id:1,fName:newFirstName,lName:newLastName,dob:newDOB});
  }

  return (
    <div>
      <h1> ID: {data.id}</h1>
      <h1>First Name: {data.fName}</h1>
      <h1>Last Name: {data.lName}</h1>
      <h1>Date Of Birth: {data.dob.toDateString()}</h1>

      <form onSubmit={handleForm}>
        <fieldset>
          <legend> Update User</legend>
          <input type='text' id='fname' placeholder='First Name' /> <br />
          <input type='text' id='lname' placeholder='Last Name' /> <br />
          <input type='date' id='dob' /> <br />
          <input type="submit" className="btn"/> 
        </fieldset>
      </form>
    </div>
  );
};

export default UseStateObject2;
