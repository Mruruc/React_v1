import { useEffect, useState } from "react";


const UseEffectBasic = () => {

  const [value,setValue]=useState(0);

  /**
   * if we will not specify the second argument for useEffect  which is dependency array, it will run after each render.
   */

  useEffect(()=>{
    console.log('UseEffect is running ')
  },[]);

  return (
    <div>
      <h1>Value: {value}</h1>

      <button className='btn' onClick={() => setValue(value + 1)}>
        Click
      </button>
    </div>
  );
}

export default UseEffectBasic;
