import { useState } from 'react';
import data from './data';
import List from './component/List';
import Button from './component/Button';
import { handleEvent } from './component/handleEvent.js';
import Header from './component/Header';
import Footer from './component/Footer';


function App() {
  
  const [people, setPeople] = useState(data);

  return (
    <>
      <Header length={people.length}/>

      <List list={people} />

      <Button
        handleFunction={() => handleEvent(setPeople)}
        btnClass='btn-delete'
        btnName='Clear All'
      />

      <Footer/>
    </>
  );
}

export default App;
