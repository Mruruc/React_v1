
import Person from "./Person";


const List = (props) => {

 


  return (
    <section>

      <ul>

        {props.list.map((person) => {

          return (
            <li key={person.id}>

              <Person
              photo={person.image} 
              name={person.name} 
              age={person.age} />

            </li>
          );
        })}

      </ul>

    </section>
  );
}

export default List;
