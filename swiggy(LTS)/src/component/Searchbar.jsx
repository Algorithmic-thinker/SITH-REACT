

const Searchbar = ({searchText, setSearchText, masterList, updateRestaurantList, searchInputRef}) => {
    
    const handleSearchText = (text) =>{
        setSearchText(text);
    }


    const handleSearch = () => {
        const newData = masterList.filter((restaurant) => (restaurant?.info?.name.trim().toLowerCase().includes(searchText.trim().toLowerCase())));
        console.log("newData", newData);
        updateRestaurantList(newData);
    }

    return(
        <div className='mx-5 my-5 border  w-full max-w-sm border-black rounded-full relative '>
          <input className=" p-3 w-full h-full rounded-full" type="text" placeholder="Enter Restaurant Name" ref={searchInputRef} value={searchText} onChange={(e) => handleSearchText(e.target.value)}/>
          {searchText.trim() && <button className=' absolute right-2 top-1/2 -translate-y-1/2' onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>}
        </div>
    )
    
}

export default Searchbar