import { useState } from "react"



const UseStateObject1 = () => {

  const [name,setName]=useState('Peter');
  const [age, setAge] = useState(52);
  const [hobby, setHobby] = useState('Hiking');

function displayJohn(){
  setName('John');
  setAge(100);
  setHobby('Dancing');
}
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{hobby}</h1>

      <button className="btn" onClick={displayJohn}
      >Show John</button>
    </div>
  );
}

export default UseStateObject1;
