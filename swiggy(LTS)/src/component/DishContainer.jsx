import DishCard from "./DishCard";
import { MENU_IMAGE_URL } from "../constant/config";
import MenuBanner from "./MenuBanner";

const DishContainer = ({filteredNormalData, filteredNestedData}) =>{
    const toggleMenu =(e) =>{
        let arrow = e.target.innerText;
        if(arrow == "▲"){
            e.target.innerText = "▼";
            e.target.parentNode.nextElementSibling.style.display = "none";
        }
        else{
            e.target.innerText = "▲";
            e.target.parentNode.nextElementSibling.style.display = "block";
        }
    
    }
    return(
            <div>
                <h1 className="text-2xl font-bold text-center py-12 underline">MENU</h1>
                <div>
                    {
                        filteredNormalData?.map((menuData, index) =>{
                            return(
                            <div key={index}>
                                <div  className="flex justify-between py-2">
                                    <h1 className="text-xl font-bold "> { menuData?.card?.card?.title} ({menuData?.card?.card?.itemCards.length})</h1>
                                    <button onClick={(e)=>{toggleMenu(e)}}>▲</button>
                                </div>
                                <div>
                                    {
                                        menuData?.card?.card?.itemCards.map(foodItems =>{
                                            return(
                                                <DishCard name={foodItems?.card?.info?.name} 
                                                price={foodItems?.card?.info?.price ?  foodItems?.card?.info?.price / 100 : foodItems?.card?.info?.defaultPrice/ 100}
                                                rating={foodItems?.card?.info?.ratings?.aggregatedRating?.rating ? ` ${foodItems?.card?.info?.ratings?.aggregatedRating?.rating} ( ${foodItems?.card?.info?.ratings?.aggregatedRating?.ratingCountV2} )` : "Be the first one to try and give a review"} 
                                                description={foodItems?.card?.info?.description}
                                                imageUrl={`${MENU_IMAGE_URL}${foodItems?.card?.info?.imageId}`}
                                                isVeg={foodItems?.card?.info?.isVeg}
                                                key={foodItems?.card?.info?.id}/>
                                            )
                                            }
                                        )
                                    }
                                </div>
                            </div>
                            )
                        }
                        )
                    }
                </div>


                <div>
                    {
                        filteredNestedData?.map((collection, divId)=>{
                            return(
                                <div key={divId}>
                                    <MenuBanner menuName={collection?.card?.card?.title} fontSize="text-xl"/>
                                    <div>
                                        {
                                            collection?.card?.card?.categories?.map((menuData, index) =>{
                                                return(
                                                <div key={index}>
                                                    <div className="flex justify-between py-2">
                                                        <h1 className="text-lg font-bold "> { menuData?.title} ({menuData?.itemCards.length})</h1>
                                                        <button onClick={(e)=>{toggleMenu(e)}}>▲</button>
                                                    </div>
                                                    <div>
                                                        {
                                                            menuData?.itemCards.map(foodItems =>{
                                                                return(
                                                                    <DishCard name={foodItems?.card?.info?.name} 
                                                                    price={foodItems?.card?.info?.price ?  foodItems?.card?.info?.price / 100 : foodItems?.card?.info?.defaultPrice/ 100}
                                                                    rating={foodItems?.card?.info?.ratings?.aggregatedRating?.rating ? ` ${foodItems?.card?.info?.ratings?.aggregatedRating?.rating} ( ${foodItems?.card?.info?.ratings?.aggregatedRating?.ratingCountV2} )` : "Be the first one to try and give a review"} 
                                                                    description={foodItems?.card?.info?.description}
                                                                    imageUrl={`${MENU_IMAGE_URL}${foodItems?.card?.info?.imageId}`}
                                                                    isVeg={foodItems?.card?.info?.isVeg}
                                                                    key={foodItems?.card?.info?.id}/>
                                                                )
                                                                }
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                                )
                                            }
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                        )

                    }
                </div>

            </div>
    )
}

export default DishContainer