

const ShimmerCard = () =>{
    return(
        new Array(20).fill(0).map(()=>{
            return (
                <div className=" md:w-[24%] w-full h-max my-5 shadow-lg shadow-slate-300 p-2">
                    <div className="max-w-full px-1 h-[150px] w-full bg-[#7f7f7f]">
                    </div>
                    <div className="px-2 mt-2">
                        <h2 className="font-semibold text-2xl bg-[#7f7f7f] h-4 w-full"></h2>
                        <div className="flex gap-2 mt-2">
                            <h2 className="bg-[#7f7f7f] h-4 w-1/5 "></h2>
                            <h2 className="text-[16px] bg-[#7f7f7f] h-4 w-1/5"></h2>
                        </div>
                    </div>
                    <p className="text-gray-500 mx-2 bg-[#7f7f7f] h-4 w-11/12 mt-2"></p>
                    <p className="text-gray-500 mx-2 bg-[#7f7f7f] h-4 w-11/12 mt-2"></p>
                </div>
            )
        })
    )
}

export default ShimmerCard;