

const ShimmerCard = () =>{
    return(
        new Array(20).fill(0).map((card, index)=>{
            return (
                <div className="xl:w-[24%] lg:w-[32%] md:w-[49%] sm:w-[99%] w-full h-max my-5 shadow-lg shadow-slate-300 p-2" key={index}>
                    <div className="max-w-full px-1 h-[150px] w-full bg-[#e7e7e7]">
                    </div>
                    <div className="px-2 mt-2">
                        <h2 className="font-semibold text-2xl bg-[#e7e7e7] h-4 w-full"></h2>
                        <div className="flex gap-2 mt-2">
                            <h2 className="bg-[#e7e7e7] h-4 w-1/5 "></h2>
                            <h2 className="text-[16px] bg-[#e7e7e7] h-4 w-1/5"></h2>
                        </div>
                    </div>
                    <p className="text-gray-500 mx-2 bg-[#e7e7e7] h-4 w-11/12 mt-2"></p>
                    <p className="text-gray-500 mx-2 bg-[#e7e7e7] h-4 w-11/12 mt-2"></p>
                </div>
            )
        })
    )
}

export default ShimmerCard;