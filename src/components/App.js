import React from "react";
import Header from "./Header";
import Doggo from "./Doggo";
import {useState, useEffect} from "react";

function App() {

  const [dogs, setDogs] = useState([])
  const [selectedDog, setSelectedDog] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then(r => r.json())
    .then(data => {
      setDogs(data)
    })
  }, [])

  function selectDog(dog) {
    setSelectedDog(dog)
  }

  function updateDog(id) {
    const updatedDogs = dogs.map(dog => {
      if (dog.id === id) {
        dog.isGoodDog = !dog.isGoodDog
      }
      else {
        return dog
      }
      return dog
    })
    setDogs(updatedDogs)
  }

  return (
    <div className="App">
      <Header dogs={dogs} selectDog={selectDog}/>
      {selectedDog? <Doggo selectedDog={selectedDog} onUpdateDog={updateDog}/> : null}
    </div>
  );
}

export default App;
