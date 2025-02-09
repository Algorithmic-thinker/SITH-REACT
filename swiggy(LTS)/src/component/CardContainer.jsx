import RestaurantCard from '../component/RestaurantCard'
import {restaurantData} from '../constant/config.js'
import { useState } from 'react'

const CardContainer = () => {
    const [restaurantList , setRestaurantList] = useState(restaurantData);

    function filter(){

    const filteredRestaurantData = restaurantList.filter((restaurant)=>
      restaurant.rating >= 4.5
    );
     
    setRestaurantList(filteredRestaurantData);
  }

    return(
      <>
        <button className="bg-gray-300 hover:bg-gray-400 border border-black" onClick={filter}>Filter</button>
        <div className=' flex justify-start flex-wrap py-4'>
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