
const MenuDetails = ({rating, ratingNumber, costOfTwo, cuisines, areaName, deliveryTime}) =>{
    return(
        <div className="p-4 rounded-3xl linear-gradient-black">
            <div className="border p-4 font-bold rounded-3xl bg-white">
                <div className="flex  gap-2">

                    <p><i className="fa-solid fa-star text-[13px] text-white border border-transparent rounded-[50%] p-1 bg-green-600 scale-75"></i>{rating} ({ratingNumber})</p>
                    <p className=" text-gray-400 -translate-y-1/3 text-2xl">.</p>
                    <p>{costOfTwo}</p>

                </div>

                <div>
                    <p className="text-orange-500 underline text-sm">{cuisines === "" ? cuisines : cuisines.join(', ') }</p>
                </div>

                <div className="flex py-4 gap-4">
                    <div className="flex flex-col  items-center p-1">
                        <div className="w-2 h-2 rounded-[50%] bg-gray-400"></div>
                        <div className="w-1/5 h-10 bg-gray-400 "></div>
                        <div className="w-2 h-2 rounded-[50%] bg-gray-400"></div>
                    </div>
                    <div className="flex flex-col text-sm justify-between">
                        <div>
                            <p>Outlet <span className="text-gray-400 font-medium ms-2">{areaName}</span></p>
                        </div>
                        <div>
                            <p>{deliveryTime}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MenuDetails