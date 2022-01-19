import React from "react";
import Header from "./Header";
import Doggo from "./Doggo";
import {useState, useEffect} from "react";

function App() {

  const [dogs, setDogs] = useState([])
  const [selectedDog, setSelectedDog] = useState('')
  const [filter, setFilter] = useState(false)

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

  function handleFilterClick() {
    setFilter(!filter)
  }

  let dogsToDisplay = dogs
  if (filter) {
    dogsToDisplay = dogsToDisplay.filter(dog => dog.isGoodDog)
  }
    
  return (
    <div className="App">
      <Header dogs={dogsToDisplay} selectDog={selectDog} handleFilterClick={handleFilterClick} filter={filter}/>
      {selectedDog? <Doggo selectedDog={selectedDog} onUpdateDog={updateDog}/> : null}
    </div>
  );
}

export default App;
