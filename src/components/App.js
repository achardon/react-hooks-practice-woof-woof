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

  console.log(dogs)

  function selectDog(dog) {
    setSelectedDog(dog)
  }

  console.log(selectedDog)

  function updateDog(id) {
    console.log("dog status clicked")
    // dogs.map(dog => {
    //   console.log(dog)
    //   if (dog.id === id) {
    //     // dog.isGoodDog = !isGoodDog
    //   }
    // })
  }


  return (
    <div className="App">
      <Header dogs={dogs} selectDog={selectDog}/>
      {selectedDog? <Doggo selectedDog={selectedDog} onUpdateDog={updateDog}/> : null}
    </div>
  );
}

export default App;
