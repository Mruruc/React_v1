import { useState } from 'react';
import { data } from '../../data';

/* const handleevent = () => {
  const list = document.querySelectorAll('li');

  const value = parseInt(document.getElementById('eventId').value);

  console.log(value);

  console.log();

  console.log(list);

  list[value - 1].remove();
  console.log(list);
};*/

function UseStateArrayExample() {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);

    setPeople(newPeople);
  };

  const removeAll = () => {
    setPeople([]);
  };

  return (
    <>
      <div>
        {people.map((person) => {
          return (
            <div key={person.id}>
              {person.name}
              <br />
              <button
                type='button'
                className='btn'
                onClick={() => removePerson(person.id)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>

      <br />
      <button type='button' className='btn' onClick={removeAll}>
        RemoveAll
      </button>

      {/**  <input type='number' placeholder='enter the person Id' id='eventId' />
      <br />
      <input type='submit' value={'delete'} onClick={handleevent} />  */}
    </>
  );
}

export default UseStateArrayExample;
