import { useEffect, useState } from "react";
import { createMenuUrl } from "../constant/config";

const useMenu = (id) =>{
    const url = createMenuUrl(id);
    const [menuData, setMenuData] = useState([]);
    const [menuName, setMenuName] = useState("");
    const [rating, setRating] = useState("");
    const [ratingNumber, setRatingNumber] = useState("");
    const [costOfTwo, setCostOfTwo] = useState("");
    const [cuisines, setCuisines] = useState("");
    const [areaName, setAreaName] = useState("");
    const [deliveryTime, setDeliveryTime] = useState("");
    const [offers, setOffers] = useState([]);
    const [unfilteredMenu, setUnfilteredMenu] = useState([]);
    const [filteredNormalData, setFilteredNormalData] = useState([]);
    const [filteredNestedData, setFilteredNestedData] = useState([]);

    const getData = async() =>{
        try{
        const response = await fetch(url);
        console.log("menu Response", response);
        const data = await response.json();
        console.log("menu data", data);

        setMenuName(data?.data?.cards[0]?.card?.card?.text);
        console.log("name", data?.data?.cards[0]?.card?.card?.text);

        setRating(data?.data?.cards[2]?.card?.card?.info?.avgRating);
        console.log("rating",data?.data?.cards[2]?.card?.card?.info?.avgRating);

        setRatingNumber(data?.data?.cards[2]?.card?.card?.info?.totalRatingsString);
        console.log("number of Rating",data?.data?.cards[2]?.card?.card?.info?.totalRatingsString);

        setCostOfTwo(data?.data?.cards[2]?.card?.card?.info?.costForTwoMessage);
        console.log("costForTwo",  data?.data?.cards[2]?.card?.card?.info?.costForTwoMessage );

        setCuisines(data?.data?.cards[2]?.card?.card?.info?.cuisines);
        console.log('cuisines', data?.data?.cards[2]?.card?.card?.info?.cuisines);

        setAreaName(data?.data?.cards[2]?.card?.card?.info?.areaName);
        console.log("areaname", data?.data?.cards[2]?.card?.card?.info?.areaName);

        setDeliveryTime(data?.data?.cards[2]?.card?.card?.info?.sla?.slaString);
        console.log("delivery time",data?.data?.cards[2]?.card?.card?.info?.sla?.slaString );

        setOffers(data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers);
        console.log("offers",data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers );


        setUnfilteredMenu( data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        console.log("unfiltered menus", data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

       setFilteredNormalData (unfilteredMenu.filter((unfilteredData)=>{
            unfilteredData?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        }));

        setFilteredNestedData( unfilteredMenu.filter((unfilteredData)=>{
            unfilteredData?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory'
        }
        ));

        setMenuData(menuData);

        }
        catch (error){
            console.log("error", error);
        }
    }
    useEffect(()=>{
        getData();
    },[]);

    const menuObject = {
        menuName : menuName,
        areaName : areaName ,
        costOfTwo : costOfTwo,
        cuisines : cuisines,
        deliveryTime : deliveryTime,
        filteredNestedData : filteredNestedData, 
        filteredNormalData : filteredNormalData,
        menuData :menuData,
        offers : offers,
        rating : rating,
        ratingNumber : ratingNumber
    };

    return(menuObject);
}

export default useMenu