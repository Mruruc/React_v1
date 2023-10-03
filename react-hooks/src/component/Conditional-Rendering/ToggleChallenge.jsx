import { useState } from "react"



const ToggleChallenge = () => {

 const [showAlert,setShowAlert]= useState(false);

 function handleEvent(){
  if(showAlert){
    setShowAlert(false);
    return;
  }
  setShowAlert(true);
 }

  return (
    <div>
      <button className="btn" onClick={handleEvent}>Click</button>
      {/*showAlert && <Alert/>*/}
      {showAlert ? <Alert/> : null}
    </div>
  )
}

const Alert=()=>{
  return <div className="alert alert-danger">Hello There ...</div> ;
}

export default ToggleChallenge
