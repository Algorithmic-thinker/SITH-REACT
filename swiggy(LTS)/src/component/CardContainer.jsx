import RestaurantCard from '../component/RestaurantCard'
import { API_URL} from '../constant/config.js'
import { useState, useEffect } from 'react'
import ShimmerCard from '../component/ShimmerCard.jsx'

const CardContainer = () => {
  const [restaurantList , setRestaurantList] = useState([]);
  const [errorVariable , setErrorVariable] = useState("");

  function filter(){

    const filteredRestaurantData = restaurantList.filter((restaurant)=>
      restaurant.info.avgRating >= 4.5
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
        }
        else if(response.status === 400){
          throw new Error("Bad Request : Syntax error")
        }
        else if(response.status === 401){
          throw new Error("Unauthorized : Please enter username and password")
        }
        else if(response.status === 403){
          throw new Error("Forbidden : Unauthorized request")
        }
        else if(response.status === 404){
          throw new Error("Not Found : can not find the requested resource")
        }
      }
      catch(error){
        console.log("error", error.message);
        setErrorVariable(response.status);
      }
    };
  
    getRestaurantData();
  },[]);
  
  if(errorVariable){
    if(errorVariable === 400){
      return(
        <div className='max-w-[50rem] my-20'>
          <img className="max-w-full" src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/07/000-HTTP-Error-400.png"/>
        </div>
      )
    }
    else if(errorVariable === 401){
      return(
        <div className='max-w-[50rem] my-20'>
          <img className="max-w-full" src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/12/401-error-wordpress-featured-image.jpg"/>
        </div>
      )
    }
    else if(errorVariable === 403){
      return(
        <div className='max-w-[50rem] my-20'>
          <img className="max-w-full" src="https://miro.medium.com/v2/resize:fit:1400/1*MIrLuyiCDpdNbnFYxYlKtA.png"/>
        </div>
      )
    }
    else if(errorVariable === 404){
      return(
        <div className='max-w-[50rem] my-20'>
          <img className="max-w-full" src="https://blog.thomasnet.com/hubfs/shutterstock_774749455.jpg"/>
        </div>
      )
    }
  }
  return(
    <>
      <button className="bg-gray-300 hover:bg-gray-400 border border-black" onClick={filter}>Filter</button>
      <div className='flex justify-start flex-wrap gap-2 py-4'>
        {restaurantList.length === 0 ? <ShimmerCard/> : 
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