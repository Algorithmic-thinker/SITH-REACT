

const ShimerCarousel = () =>{
    return(
            new Array(10).fill(0).map((card, index)=> {
        return(
            <div className="w-1/3 h-max">
                <div className=" w-full max-w-[12rem] h-40 bg-[#e7e7e7]" key={index}></div>
            </div>
        ) 
        })
    )
}

export default ShimerCarousel