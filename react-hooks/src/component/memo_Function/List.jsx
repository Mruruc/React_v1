import { memo } from 'react';
import Person from './Person'

const List = (props) => {
  const {list,removeUser}=props;

  return (
    <div>
      {
        list.map((user)=>{
          return <Person key={user.id} name={user.name} removeUser={()=>removeUser(user.id)}/>;
        })
      }
    </div>
  )
}

export default memo(List);

/***
 * memo function will prevent the list to be re-render as long as the list the did not change.
 */