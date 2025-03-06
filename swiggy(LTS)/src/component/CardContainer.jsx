import RestaurantCard from '../component/RestaurantCard'
import { useState, useEffect } from 'react'
import ShimmerCard from '../component/ShimmerCard.jsx'
import CarouselCard from '../component/CarouselCard.jsx'
import useRestaurant from '../utils/useRestaurant.js'
import Searchbar from './Searchbar.jsx'


const CardContainer = () => {

  const [searchText , setSearchText] = useState("");
  const restaurantData = useRestaurant();
 const {restaurantList, masterList, carouselList, errorImage, updateRestaurantList} = restaurantData;
  
  

  const moveLeft = (e) =>{
    var element = document.getElementById("scrollbar");
    element.scrollLeft -= 150;
    if(element.scrollLeft === 0 ){
      e.target.style.color = "gray";
    }
    else{
      e.target.style.color = "black";
    }
    e.target.nextSibling.style.color = "black";
  }

  const moveRight = (e) =>{
    var element = document.getElementById("scrollbar");
    element.scrollLeft += 150;
    if(Math.ceil(element.scrollLeft) === element.scrollWidth - element.clientWidth ){
      e.target.style.color = "gray";
    }
    else{
      e.target.style.color = "black";
    }
    e.target.previousSibling.style.color = "black";
  }

  const resetRestaurantList = () =>{
    setSearchText("");
    updateRestaurantList(masterList);
  }


  function handleRatting(){

    const filteredRestaurantData = masterList.filter((restaurant)=>
      restaurant?.info?.avgRating >= 4.5
    );
      
    updateRestaurantList(filteredRestaurantData);

  }

  const handleVeg = () => {
    const filteredRestaurantData = masterList.filter((restaurant)=>
      restaurant?.info?.veg == true
    );
    updateRestaurantList(filteredRestaurantData);
  }

  const handleBuget = () =>{
    const filteredRestaurantData = masterList.filter((restaurant)=>
       restaurant?.info?.costForTwo.match(/(\d+)/)[0] <= 300
    );
    updateRestaurantList(filteredRestaurantData);
  }

  
  if(errorImage){
      return(
        <div className='max-w-[50rem] my-20'>
          <img className="max-w-full" src={errorImage}/>
        </div>
      )
    }

  return(
    <>

      <div className='w-full my-5'>

        <div className='flex justify-between my-2'>
          <h1 className='text-4xl font-bold'>What's on your mind?</h1>
          <div className='flex text-4xl gap-3'>
            <i className="fa-regular fa-circle-left text-gray-500" onClick={(e) => moveLeft(e)}></i>
            <i className="fa-regular fa-circle-right" onClick={(e) => moveRight(e)}></i>
          </div>
        </div>

        <div className='w-full h-[13rem] overflow-x-auto ' id='scrollbar'>
          <div className='w-[200%] flex flex-row'>
            {
            carouselList.map((carousel)=>{
            return(
            <CarouselCard
              {...carousel}
              key = {carousel?.id}
            />
            )
            })
            }
          </div>
        </div>

      </div>


      <h1 className='text-4xl my-4'>Restaurant List</h1>
      <div className='flex justify-between flex-wrap'>
      
        <Searchbar searchText = {searchText} setSearchText = {setSearchText} masterList = {masterList} updateRestaurantList = {updateRestaurantList} />

        <div className='mx-5 my-5'>
        <button className="bg-gray-300 hover:bg-gray-400 border border-black  h-full p-2" onClick={resetRestaurantList}>Show All</button>
        </div>

        <div className='mx-5 my-5  w-1/3 flex justify-between gap-2'>
          <h2 className='text-2xl underline underline-offset-[0.5rem]'>Filters: </h2>
          <button className="bg-gray-300 hover:bg-gray-400 border border-black  h-full p-2" onClick={handleRatting}>TOP RATED</button>
          <button className="bg-gray-300 hover:bg-gray-400 border border-black  h-full p-2" onClick={handleVeg}>Pure Veg</button>
          <button className="bg-gray-300 hover:bg-gray-400 border border-black  h-full p-2" onClick={handleBuget}>Buget friendly</button>
        </div>

      </div>
      
      <div className='flex justify-start flex-wrap gap-2 py-4'>
        {restaurantList.length === 0 ? masterList.length == 0 ? <ShimmerCard/> : searchText.length == 0 ?
          <h1>No restaurant matches the applied filter</h1> :
         <h1>There is no restaurant named <span className='text-red-400'>"{searchText}"</span></h1>:
          restaurantList.map((restaurant) =>{
              return(
              (
                <RestaurantCard
                  {...restaurant?.info}
                  key = {restaurant?.info?.id}
              />
              ) 
              
              )
          })
          }
      </div>
    </>
      
  )
}

export default CardContainer