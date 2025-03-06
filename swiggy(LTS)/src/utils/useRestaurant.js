import {useState, useEffect} from 'react'
import { BAD_REQUEST_URL } from '../constant/config.js'
import { FORBIDDEN_URL } from '../constant/config.js'
import { UNAUTHORIZED_URL } from '../constant/config.js'
import { NOTFOUND_URL } from '../constant/config.js'
import { API_URL} from '../constant/config.js'

const useRestaurant = () =>{

    const [restaurantList , setRestaurantList] = useState([]);
    const [masterList , setMasterList] = useState([]);
    const [carouselList , setCarouselList] = useState([]);
    const [errorImage , setErrorImage] = useState("");

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
      
      const resObject = {
            restaurantList : restaurantList,
            masterList: masterList,
            carouselList: carouselList,
            errorImage: errorImage,
            updateRestaurantList: setRestaurantList,
      }
      return resObject;
}

export default useRestaurant