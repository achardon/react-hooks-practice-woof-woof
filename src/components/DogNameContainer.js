

function DogNameContainer( {dogs, selectDog} ) {

    return(
        <div id="dog-bar">
            {dogs.map(dog => <span onClick={() => selectDog(dog)} key={dog.id}>{dog.name}</span>)}
        </div>

    )
}

export default DogNameContainer;