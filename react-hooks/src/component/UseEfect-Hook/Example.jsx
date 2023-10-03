import React, { useState } from 'react'

const Example = () => {
  const [value,setValue]=useState(0);

  /**
   * For every render function will be call it,
   * 
   * The Important point is that we should not set the setValue function inside it.
   * it will cause self infinite loop.
   */

  function test(){
    let x=0;
    console.log(x);
  }
  test();

  return (
    <div>
      <h1>Value: {value}</h1>
      <button className='btn' onClick={()=>setValue(value +1 )}>Click</button>
    </div>
  )
}

export default Example
