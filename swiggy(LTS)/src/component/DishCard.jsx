

const DishCard = ({name, price, rating, description, imageUrl , isVeg}) =>{

    let descriptionFlag = false;
    let shownDescription = description;

    if(description?.split(" ").length > 30){
        shownDescription = description?.split(" ")?.splice(0,30)?.join(" ");
        descriptionFlag = true;
    }
    
    const toggleDescription = (e)=>{
        let content = e.target.innerText;
        if(content == "...more"){
            e.target.innerText = "...less";
            e.target.previousElementSibling.innerText = description;
        }
        else{
            e.target.innerText = "...more";
            e.target.previousElementSibling.innerText = shownDescription ;
        }
    }
    return(
        <div className="py-8 border-b border-gray-400 flex justify-between  w-full overflow-hidden">
            <div className="w-9/12">
                <div>
                    {
                        isVeg ?
                        <div className="w-3 h-6 scale-50">
                            <i className=" rounded-lg border-[0.2rem] border-green-500 pt-1 px-1 ">
                                <span className="text-[2rem] text-green-500">●</span>
                            </i>
                        </div> : 
                        <div className="w-3 h-6 scale-50">
                            <i className=" rounded-lg border-[0.2rem] border-red-500 p-1 ">
                                <span className="text-[1.5rem] text-red-500">▲</span>
                            </i>
                        </div>
                    }
                </div>
                <h1 className="text-lg font-bold ">{name}</h1>
                <p> ₹ {price} </p>
                <p className="text-sm py-2"><i className="fa-solid fa-star text-green-800 "></i>{rating}</p>
                <div className="h-min max-w-full ">
                    <span className="text-gray-500 max-w-full">{shownDescription}</span>
                   { descriptionFlag && <button className="ps-2" onClick={(e) =>{ toggleDescription(e) }}>...more</button>}
                </div>
            </div>
            <div className="w-[12%] relative">
                <img className="rounded-xl max-w-full h-auto" src={imageUrl}/>
                <button className="absolute bottom-0 right-1/2 sm:translate-x-1/2 translate-x-1/4 sm:px-4 px-2 text-green-500 font-bold sm:text-xl border bg-white rounded-xl">ADD</button>
            </div>
        </div>
    )
}
export default DishCard