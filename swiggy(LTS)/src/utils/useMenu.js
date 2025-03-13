import { useEffect, useState } from "react";
import { createMenuUrl } from "../constant/config";

const useMenu = (id) =>{
    const url = createMenuUrl(id);
    const [menuData, setMenuData] = useState([]);
    const [menuName, setMenuName] = useState("");

    const getData = async() =>{
        try{
        const response = await fetch(url);
        console.log("menu Response", response);
        const data = await response.json();
        console.log("menu data", data);

        setMenuName(data?.data?.cards[0]?.card?.card?.text);
        console.log("name", menuName);

        console.log("rating",data?.data?.cards[2]?.card?.card?.info?.avgRating);
        console.log("number of Rating",data?.data?.cards[2]?.card?.card?.info?.totalRatingsString);
        console.log("costForTwo",  data?.data?.cards[2]?.card?.card?.info?.costForTwoMessage );
        console.log('cuisines', data?.data?.cards[2]?.card?.card?.info?.cuisines);
        console.log("areaname", data?.data?.cards[2]?.card?.card?.info?.areaName);
        console.log("delivery time",data?.data?.cards[2]?.card?.card?.info?.sla?.minDeliveryTime, menuData?.data?.cards[2]?.card?.card?.info?.sla?.maxDeliveryTime );
        console.log("offers",data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers );

        const unfilteredMenu = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        console.log("unfiltered menus", unfilteredMenu);

        const filteredNormalData = unfilteredMenu.filter((unfilteredData)=>{
            unfilteredData?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        });
        const filteredNestedData = unfilteredMenu.filter((unfilteredData)=>{
            unfilteredData?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory'
        }
        );

        console.log("filtered Normal Menu",filteredNormalData);
        console.log("filtered Nested Menu",filteredNestedData);

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
    };

    return(menuObject);
}

export default useMenu