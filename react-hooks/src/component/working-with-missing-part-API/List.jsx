import {people} from '../../data';
import User from './User';

const List = () => {

  return <>{

  people.map((user)=>{
    return(
       <div key={user.id}>
      <User name={user.name} nickName={user.nickName} images={user.images}/>
    </div>
    )
  })
  
  
  }</>;
}

export default List
