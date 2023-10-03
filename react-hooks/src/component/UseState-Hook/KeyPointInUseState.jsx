

import React, { useState } from 'react'

function KeyPointInUseState() {

  const [count,setCount]=useState(0);

  function handleEvent(){
    //to make setCount function synchronous
    // have to pass a function that handle update in useState function.

    //setCount(count + 1);

  /*  setCount((currentState) => {
      const newState = currentState + 1;
      console.log(newState)
      return newState;
    });  */

    setTimeout(()=>{
      console.log(count);
      setCount((currentState)=>{
        return currentState +1;
      });
    },3000);

  
    
  }

  return (
    <div>
      <h1>{count}</h1>

      <button type='button' className='btn'
      onClick={handleEvent}>Increase</button>
      
    </div>
  )
}

export default KeyPointInUseState;
