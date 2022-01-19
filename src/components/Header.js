import FilterButton from "./FilterButton";
import DogNameContainer from "./DogNameContainer";

function Header( {dogs, selectDog} ) {

    return(
        <div>
            <FilterButton />
            <div >
                <DogNameContainer dogs={dogs} selectDog={selectDog} />
            </div>
        </div>
    )
}

export default Header;