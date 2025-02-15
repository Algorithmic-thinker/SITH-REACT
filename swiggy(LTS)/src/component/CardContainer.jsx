import RestaurantCard from '../component/RestaurantCard'
import {restaurantData, API_URL} from '../constant/config.js'
import { useState, useEffect } from 'react'

const CardContainer = () => {
    const [restaurantList , setRestaurantList] = useState(restaurantData);

    function filter(){

    const filteredRestaurantData = restaurantList.filter((restaurant)=>
      restaurant.rating >= 4.5
    );
     
    setRestaurantList(filteredRestaurantData);

    const getRestaurantData = async() => {
      const data = await fetch(API_URL);
      const json = await data.json();
      console.log("carousel data", json.data);
    }

    getRestaurantData();
  }

    return(
      <>
        <button className="bg-gray-300 hover:bg-gray-400 border border-black" onClick={filter}>Filter</button>
        <div className='flex justify-start flex-wrap gap-2 py-4'>
            {
                restaurantList.map((restaurant) =>{
                   return( 
                   <RestaurantCard
                        {...restaurant}
                    />
                   )
                })
            }
        </div>
      </>
        
    )
}

export default CardContainer