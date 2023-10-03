import { useState } from "react"

/**
 * In JSX we can not use if statement directly so we need to use Short Circuit Evaluation:
 *
 */


const ShortCircuitEvaluation = () => {

  const [name,setName]=useState('');
   const [age, setAge] = useState(54);

  return (
    <div>
      <h2>
        In && Evaluation, if one of them falsy it will return the Falsy One:
      </h2>
      <h3>{name && 'Default Name'}</h3>
      <h3>{age && 0}</h3>
      <br />
      <h2>
        In || Evaluation, if one them is truthy the truthy one will be returned:
      </h2>
      <h3>{name || 'Default Name'}</h3>
      <h3>{age || 0}</h3>
    </div>
  );
}

export default ShortCircuitEvaluation
