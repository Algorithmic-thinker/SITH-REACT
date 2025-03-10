import RestaurantCard from '../component/RestaurantCard'
import { useState, useEffect } from 'react'
import ShimmerCard from '../component/ShimmerCard.jsx'
import CarouselCard from '../component/CarouselCard.jsx'
import useRestaurant from '../utils/useRestaurant.js'
import Searchbar from './Searchbar.jsx'
import ShimerCarousel from './ShimerCarousel.jsx'


const CardContainer = () => {

  const [searchText , setSearchText] = useState("");
  const restaurantData = useRestaurant();
 const {restaurantList, masterList, carouselList, errorImage, updateRestaurantList} = restaurantData;
  const [scroll, setScroll] = useState(0);
  
  useEffect(()=>{

    const scrollElement = document.getElementById("scrollbar");

    if(scrollElement.scrollLeft === 0 ){
      document.querySelector('.fa-circle-left').style.color = "gray";
    }
    else{
      document.querySelector('.fa-circle-left').style.color = "#252525";
    }

    if(Math.ceil(scrollElement.scrollLeft) === scrollElement.scrollWidth - scrollElement.clientWidth || Math.floor(scrollElement.scrollLeft) === scrollElement.scrollWidth - scrollElement.clientWidth ){
      document.querySelector('.fa-circle-right').style.color = "gray";
    }
    else{
      document.querySelector('.fa-circle-right').style.color = "#252525";
    }

  },[scroll]);

  const moveLeft = (e) =>{
    const scrollElement = document.getElementById("scrollbar");
    scrollElement.scrollLeft -= 150; 
  }

  const moveRight = (e) =>{
    const scrollElement = document.getElementById("scrollbar");
    scrollElement.scrollLeft += 150;
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
          <h1 className='text-4xl font-semibold text-[#252525]'>What's on your mind?</h1>
          <div className='flex text-4xl gap-3'>
            <i className="fa-regular fa-circle-left text-gray-500 " onClick={(e) => moveLeft(e)}></i>
            <i className="fa-regular fa-circle-right text-[#252525]" onClick={(e) => moveRight(e)}></i>
          </div>
        </div>

        <div className='w-full h-[13rem] overflow-x-auto scroll-smooth ' id='scrollbar' onScroll={(e)=>setScroll(e.target.scrollLeft)}>
          <div className='w-[200%] flex flex-row'>
            { carouselList.length === 0  ? <ShimerCarousel/> :
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


      <h1 className='text-4xl my-4 font-semibold text-[#252525]'>Restaurant List</h1>
      <div className='flex justify-between flex-wrap'>
      
        <Searchbar searchText = {searchText} setSearchText = {setSearchText} masterList = {masterList} updateRestaurantList = {updateRestaurantList} />

        <div className='mx-5 my-5 max-w-xl flex justify-between gap-4 flex-wrap'>
          <h2 className='text-2xl underline underline-offset-[0.5rem]'>Filters: </h2>
          <button className="bg-gray-100 hover:bg-gray-200 border border-[#252525] rounded-full  p-2" onClick={handleRatting}>TOP RATED</button>
          <button className="bg-gray-100 hover:bg-gray-200 border border-[#252525]  rounded-full p-2" onClick={handleVeg}>Pure Veg</button>
          <button className="bg-gray-100 hover:bg-gray-200 border border-[#252525] rounded-full  p-2" onClick={handleBuget}>Buget friendly</button>
          <button className="bg-gray-100 hover:bg-gray-200 border border-[#252525]  rounded-full p-2" onClick={resetRestaurantList}>Show All</button>
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