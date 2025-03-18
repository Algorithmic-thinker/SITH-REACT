import { useParams } from "react-router"
import useMenu from "../utils/useMenu"
import MenuBanner from "./MenuBanner";
import MenuDetails from "./MenuDetails";
import MenuOffer from "./MenuOffer"
import DishContainer from "./DishContainer";

const RestaurantMenu = () =>{
    const params = useParams();
    const menu = useMenu(params?.id);
    console.log("menuObject", menu);

    const {menuInfo, filteredNestedData, filteredNormalData, offers} = menu;
    console.log("filtered Normal Menu",filteredNormalData);
    console.log("filtered Nested Menu",filteredNestedData);
    return(
        <div className="w-10/12 mx-auto">
            <MenuBanner menuName = {menuInfo?.name} fontSize="text-2xl"/>
            <MenuDetails rating ={menuInfo?.avgRating} ratingNumber = {menuInfo?.totalRatingsString} costOfTwo = {menuInfo?.costForTwoMessage} cuisines={menuInfo?.cuisines} areaName = {menuInfo?.areaName} deliveryTime={menuInfo?.sla?.slaString}/>
            <MenuOffer offers = {offers} />
            <DishContainer filteredNormalData = {filteredNormalData} filteredNestedData={filteredNestedData}/>
        </div>
    )
}

export default RestaurantMenu