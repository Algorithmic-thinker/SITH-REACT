import RestaurantCard from '../component/RestaurantCard'
import { API_URL} from '../constant/config.js'
import { useState, useEffect } from 'react'
import ShimmerCard from '../component/ShimmerCard.jsx'
import { BAD_REQUEST_URL } from '../constant/config.js'
import { FORBIDDEN_URL } from '../constant/config.js'
import { UNAUTHORIZED_URL } from '../constant/config.js'
import { NOTFOUND_URL } from '../constant/config.js'
import CarouselCard from '../component/CarouselCard.jsx'


const CardContainer = () => {
  const [restaurantList , setRestaurantList] = useState([]);
  const [errorImage , setErrorImage] = useState("");
  const [searchText , setSearchText] = useState("");
  const [masterList , setMasterList] = useState([]);
  const [carouselList , setCarouselList] = useState([]);
  
  const handleSearchText = (text) =>{
    setSearchText(text);
  }

  const handleSearch = () => {
    const newData = masterList.filter((restaurant) => (restaurant?.info?.name.trim().toLowerCase().includes(searchText.trim().toLowerCase())));
    console.log("newData", newData);
    setRestaurantList(newData);
  }

  function handleRatting(){

    const filteredRestaurantData = masterList.filter((restaurant)=>
      restaurant?.info?.avgRating >= 4.5
    );
      
    setRestaurantList(filteredRestaurantData);

  }

  const handleVeg = () => {
    const filteredRestaurantData = masterList.filter((restaurant)=>
      restaurant?.info?.veg == true
    );
    setRestaurantList(filteredRestaurantData);
  }

  const handleBuget = () =>{
    const filteredRestaurantData = masterList.filter((restaurant)=>
       restaurant.info.costForTwo.match(/(\d+)/)[0] <= 300
    );
    setRestaurantList(filteredRestaurantData);
  }


  useEffect(() =>{
    const getRestaurantData = async() => {
      const response = await fetch(API_URL);
      try{
        console.log("response", response);
        if(response.ok){
          const data = await response.json();
          console.log("data",data);
          console.log("carousel data", data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
          console.log("restaurant data", data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setRestaurantList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setMasterList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setCarouselList(data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
        }
        else if(response.status === 400){
          setErrorImage(BAD_REQUEST_URL);
          throw new Error("Bad Request : Syntax error")
        }
        else if(response.status === 401){
          setErrorImage(UNAUTHORIZED_URL);
          throw new Error("Unauthorized : Please enter username and password")
        }
        else if(response.status === 403){
          setErrorImage(FORBIDDEN_URL);
          throw new Error("Forbidden : Unauthorized request")
        }
        else if(response.status === 404){
          setErrorImage(NOTFOUND_URL);
          throw new Error("Not Found : can not find the requested resource")
        }
      }
      catch(error){
        console.log("error", error.message);
      }
    }
  
    getRestaurantData();
  },[]);
  
  if(errorImage){
      return(
        <div className='max-w-[50rem] my-20'>
          <img className="max-w-full" src={errorImage}/>
        </div>
      )
    }

  return(
    <>
      <div className='flex justify-between'>
      
        <div className='mx-5 my-5 border w-full max-w-xs border-black relative '>
          <input className=" w-full p-2" type="text" placeholder="Enter Restaurant Name" value={searchText} onChange={(e) => handleSearchText(e.target.value)}/>
          <button className=' absolute right-2 top-1/2 -translate-y-1/2' onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>

        <div className='mx-5 my-5  w-1/3 flex justify-between'>
          <h2 className='text-2xl underline underline-offset-[0.5rem]'>Filters: </h2>
          <button className="bg-gray-300 hover:bg-gray-400 border border-black  h-full p-2" onClick={handleRatting}>TOP RATED</button>
          <button className="bg-gray-300 hover:bg-gray-400 border border-black  h-full p-2" onClick={handleVeg}>Pure Veg</button>
          <button className="bg-gray-300 hover:bg-gray-400 border border-black  h-full p-2" onClick={handleBuget}>Buget friendly</button>
        </div>

      </div>

      <div className='w-full h-[20rem] overflow-x-auto scrollbar'>
        <div className='w-[400%]'>
          {
          carouselList.map((carousel)=>{
          return(
          <CarouselCard
            {...carousel}
          />
          )
          })
          }
        </div>
      </div>

      <div className='flex justify-start flex-wrap gap-2 py-4'>
        {restaurantList.length === 0 ? masterList.length == 0 ? <ShimmerCard/> :
         <h1>There is no restaurant named <span className='text-red-400'>"{searchText}"</span></h1>:
          restaurantList.map((restaurant) =>{
              return(
              (
                <RestaurantCard
                  {...restaurant?.info}
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