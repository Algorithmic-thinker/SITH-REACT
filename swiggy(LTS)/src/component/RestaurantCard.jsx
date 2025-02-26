import {IMG_URL} from '../constant/config.js'

const RestaurantCard = ({name, avgRating, sla, cuisines, areaName, cloudinaryImageId}) =>{
    return(
        <div className=" xl:w-[24%] lg:w-[32%] md:w-[49%] sm:w-[99%] w-full my-5 ">
            <div className="max-w-full px-1 h-[150px]">
                <img className="h-full w-full object-cover rounded-[15px]" src={IMG_URL + cloudinaryImageId}/>
            </div>
            <div className="px-2">
                <h2 className="font-semibold text-2xl">{name}</h2>
                <div className="flex gap-2">
                    <h2><i className="fa-solid fa-star text-[16px] text-green-600"></i>{avgRating}</h2>
                    <h2 className="text-[16px] ">{sla?.deliveryTime} min</h2>
                </div>
            </div>
            <p className="text-gray-500 px-3">{cuisines.join(", ")}</p>
            <p className="text-gray-500 px-3">{areaName}</p>
        </div>
    )
}

export default RestaurantCard