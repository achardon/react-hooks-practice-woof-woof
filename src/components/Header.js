import FilterButton from "./FilterButton";
import DogNameContainer from "./DogNameContainer";

function Header( {dogs, selectDog, handleFilterClick, filter} ) {

    return(
        <div>
            <FilterButton handleFilterClick={handleFilterClick} filter={filter}/>
            <div >
                <DogNameContainer dogs={dogs} selectDog={selectDog} />
            </div>
        </div>
    )
}

export default Header;