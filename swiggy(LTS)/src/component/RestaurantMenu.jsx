import { useParams } from "react-router"
import useMenu from "../utils/useMenu"
import MenuBanner from "./MenuBanner";
import MenuDetails from "./MenuDetails";
import MenuOffer from "./MenuOffer"

const RestaurantMenu = () =>{
    const params = useParams();
    const menu = useMenu(params?.id);
    console.log("menuObject", menu);

    const {menuName, areaName, costOfTwo, cuisines, deliveryTime, filteredNestedData, filteredNormalData, menuData, offers, rating, ratingNumber} = menu;
    console.log("filtered Normal Menu",filteredNormalData);
    console.log("filtered Nested Menu",filteredNestedData);
    return(
        <div className="w-10/12 mx-auto">
            <MenuBanner menuName = {menuName}/>
            <MenuDetails rating ={rating} ratingNumber = {ratingNumber} costOfTwo = {costOfTwo} cuisines={cuisines} areaName = {areaName} deliveryTime={deliveryTime}/>
            <MenuOffer offers = {offers} />
        </div>
    )
}

export default RestaurantMenu