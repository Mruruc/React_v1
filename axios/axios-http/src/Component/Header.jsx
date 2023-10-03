import axios from 'axios';
import React, { useState,useEffect } from 'react'

const url='https://icanhazdadjoke.com/';


const Header = () => {

 const[joke,setJoke]= useState("");
 const [isLoading,setIsLoading]=useState(true);

  useEffect(()=>{

    axios.get(url,{
      headers:{
        Accept:'application/json'
      }
    })
    .then((response)=>{
     setJoke(response.data.joke);
     setIsLoading(false);
    })
    .catch((error)=>{
      console.log(error.message)
    });


  },[]);
  return (
    <div>
      {
      isLoading ?  <h1>Loading</h1> : <h2>{joke}</h2>
      
      }
    </div>
  );
}

export default Header;
