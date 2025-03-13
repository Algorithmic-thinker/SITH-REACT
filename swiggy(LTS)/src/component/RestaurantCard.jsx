import {IMG_URL} from '../constant/config.js'
import { Link } from 'react-router'

const RestaurantCard = ({name, avgRating, sla, cuisines, areaName, cloudinaryImageId, id}) =>{
    return(

        <Link to={`menu/${name}/${id}`.toLowerCase().replace(/\s+/g, '-')} className=" xl:w-[24%] lg:w-[32%] md:w-[49%] sm:w-[99%] w-full my-5 hover:scale-95">
            <div className="max-w-full px-1 h-[200px]">
                <img className="h-full w-full object-cover object-center rounded-[15px]" src={IMG_URL + cloudinaryImageId}/>
            </div>
            <div className="px-2">
                <h2 className="font-semibold text-2xl">{name}</h2>
                <div className="flex gap-2">
                    <h2><i className="fa-solid fa-star text-[14px] text-white border border-transparent rounded-full p-1 bg-green-600 me-1"></i>{avgRating}</h2>
                    <h2 className="text-[16px] ">{sla?.deliveryTime} min</h2>
                </div>
            </div>
            <p className="text-gray-500 px-3">{cuisines.join(", ")}</p>
            <p className="text-gray-500 px-3">{areaName}</p>
        </Link>
    )
}

export default RestaurantCard