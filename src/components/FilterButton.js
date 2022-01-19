

function FilterButton( {handleFilterClick, filter} ) {

    return(
        <div>
            <div id="filter-div">
                <button onClick={handleFilterClick} id="good-dog-filter">Filter good dogs: {filter? 'ON' : 'OFF'}</button>
            </div>

        </div>

    )
}

export default FilterButton;