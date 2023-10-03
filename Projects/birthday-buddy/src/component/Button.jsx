

const Button = (props) => {
  return (
    <div className="btn-container">
      <button type='button' 
      onClick={props.handleFunction}
      className={props.btnClass}
      > {props.btnName} </button>
    </div>
  )
}

export default Button;
