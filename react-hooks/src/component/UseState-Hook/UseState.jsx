import React, { useState } from 'react';

function UseState() {
  // console.log(useState())
  //console.log(useState('something'));
  /*const state = useState('Waflo',()=>{});


  state.push('Shipo');
  state.push('Nelo');

console.log('length: '+state.length)
  for (const key of state) {
    console.log('===================')
    console.log(key);
  }*/

  const [count, setCount] = useState(0);

  const handleRestBtn = () => {
    setCount(0);
  };

  const handleClickEvent = () => {
    setCount(count + 1);
  };
  console.log(count);

  return (
    <div>
      <h2>useState Basic</h2>

      <h4>You clicked {count} times</h4>
      <button type='button' className='btn' onClick={handleClickEvent}>
        click me
      </button>
      <br/>
      <button type='button' className='btn' onClick={handleRestBtn}>
        reset
      </button>
    </div>
  );
}

export default UseState;
