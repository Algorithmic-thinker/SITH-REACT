import { useParams } from "react-router"
import useMenu from "../utils/useMenu"
import MenuBanner from "./MenuBanner";

const RestaurantMenu = () =>{
    const params = useParams();
    const menuData = useMenu(params?.id);
    console.log("menu", menuData);

    return(
        <>
            <MenuBanner menuName = {menuData?.menuName}/>
        </>
    )
}

export default RestaurantMenu