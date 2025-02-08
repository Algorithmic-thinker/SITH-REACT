

const RestaurantCard = ({name, rating, deliveryTIme, cuisines, location}) =>{
    return(
        <div className=" w-1/4 my-5 ">
            <div className="w-full md:max-w-[250px] max-w-[300px] h-[150px]">
                <img className="h-full w-full object-cover rounded-[15px]" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"/>
            </div>
            <div className="px-2">
                <h2 className="font-semibold text-2xl">{name}</h2>
                <div className="flex gap-2">
                    <h2><i className="fa-solid fa-star text-[16px] text-green-600"></i>{rating}</h2>
                    <h2 className="text-[16px] ">{deliveryTime}</h2>
                </div>
            </div>
            <p className="text-gray-500 px-3">{cuisines}</p>
            <p className="text-gray-500 px-3">{location}</p>
        </div>
    )
}

export default RestaurantCard