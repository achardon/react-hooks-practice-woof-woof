

function Doggo( {selectedDog, onUpdateDog} ) {

    const {id, name, isGoodDog, image} = selectedDog
    
    let dogStatus = "Good Dog!"
    
    if (isGoodDog) {
        dogStatus = "Good Dog!"
    }
    else {
        dogStatus = "Bad Dog!"
    }

    function handleClick() {
        //change isGoodDog status in database
        fetch(`http://localhost:3001/pups/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({isGoodDog: !isGoodDog})
        })
        .then(r => r.json())
        .then(data => {
            onUpdateDog(id)
        })
    }

    return(
        <div>
            <div id="dog-summary-container">
                <h1>DOGGO:</h1>
                <div id="dog-info">
                    <img src={image} alt={name} />
                    <h2>{name}</h2>
                    <button onClick={handleClick}>{dogStatus}</button>
                </div>
            </div>
        </div>

    )
}

export default Doggo;