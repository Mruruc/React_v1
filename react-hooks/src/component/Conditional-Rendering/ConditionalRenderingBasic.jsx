

import React, { useState ,useEffect} from 'react'

const ConditionalRenderingBasic = () => {

  const [isLoading,setIsLoading]=useState(true);

 /* useEffect(()=>{

    setTimeout(
      ()=>{
        if(isLoading){
          setIsLoading(false);
        }
        else{
          setIsLoading(true);
        }
      },3000
    );

  },[isLoading]);*/

  if(isLoading){
  return <h1>Heloo</h1>;
  }
  return <>
  <h1> Bullshit</h1>
  </>
  
}

export default ConditionalRenderingBasic;
