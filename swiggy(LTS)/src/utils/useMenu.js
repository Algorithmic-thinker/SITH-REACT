import { useEffect, useState } from "react";
import { createMenuUrl } from "../constant/config";

const useMenu = (id) =>{
    const url = createMenuUrl(id);
    const [menuInfo, setMenuInfo] = useState([]);
    const [offers, setOffers] = useState([]);
    const [filteredNormalData, setFilteredNormalData] = useState([]);
    const [filteredNestedData, setFilteredNestedData] = useState([]);

    const getData = async() =>{
        try{
        const response = await fetch(url);
        console.log("menu Response", response);
        const data = await response.json();
        console.log("menu data", data);
        
        setMenuInfo(data?.data?.cards[2]?.card?.card?.info);
        console.log(data?.data?.cards[2]?.card?.card?.info);

        setOffers(data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers);
        console.log("offers",data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers );

       setFilteredNormalData (data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card)=>{
          return  (card?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        }));

        setFilteredNestedData( data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card)=>{
          return  (card?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
        }
        ));

        }
        catch (error){
            console.log("error", error);
        }
    }
    useEffect(()=>{
        getData();
    },[]);

    const menuObject = {
        menuInfo : menuInfo,
        filteredNestedData : filteredNestedData, 
        filteredNormalData : filteredNormalData,
        offers : offers
    };

    return(menuObject);
}

export default useMenu