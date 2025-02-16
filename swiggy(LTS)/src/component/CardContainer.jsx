import RestaurantCard from '../component/RestaurantCard'
import { API_URL} from '../constant/config.js'
import { useState, useEffect } from 'react'

const CardContainer = () => {
    const [restaurantList , setRestaurantList] = useState([]);

    function filter(){

    const filteredRestaurantData = restaurantList.filter((restaurant)=>
      restaurant.info.avgRating >= 4.5
    );
     
    setRestaurantList(filteredRestaurantData);

  }

  useEffect(() =>{
    const getRestaurantData = async() => {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log("data",data);
      // console.log("carousel data", data.data.cards[0].card.card.gridElements.infoWithStyle.info);
      console.log("restaurant data", data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setRestaurantList(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    };
  
    getRestaurantData();
  },[])
  

    return(
      <>
        <button className="bg-gray-300 hover:bg-gray-400 border border-black" onClick={filter}>Filter</button>
        <div className='flex justify-start flex-wrap gap-2 py-4'>
            {
                restaurantList.map((restaurant) =>{
                   return( 
                   <RestaurantCard
                        {...restaurant.info}
                    />
                   )
                })
            }
        </div>
      </>
        
    )
}

export default CardContainer