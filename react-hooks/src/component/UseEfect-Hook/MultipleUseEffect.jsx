import React, { useEffect, useState } from 'react';

/**
 * In one component we can have multiple useState as wel as useEffect hook,
 * second parameter of useEffect which is dependency array, we can pass as many as argument we want, useEffect will call the call back function when each time the value/s inside dependency array its change.(it will be call it when each re-render happens).
 */
const MultipleUseEffect = () => {
  const [value1, setValue1] = useState(0);

  useEffect(() => {
    console.log('First UseEffect');
  },[value1]);

  const[value2,setValue2]=useState(0);

  useEffect(()=>{
    console.log('Second UseEffect');
  },[value2]);

  return (
    <div>
      <h1>Value: {value1}</h1>

      <button className='btn' onClick={() => setValue1(value1 + 1)}>
        Click
      </button>

      <h1>Value: {value2}</h1>

      <button className='btn' onClick={() => setValue2(value2 + 1)}>
        Click
      </button>
    </div>
  );
};

export default MultipleUseEffect;
