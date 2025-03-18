import OfferCard from "./OfferCard";
import { useState, useEffect } from "react";
import ShimerCarousel from "./ShimerCarousel";

const MenuOffer = ({offers}) =>{

    const [scroll, setScroll] = useState(0);
      
      useEffect(()=>{
    
        const scrollElement = document.getElementById("scrollbar");
    
        if(scrollElement.scrollLeft === 0 ){
          document.querySelector('.fa-circle-left').style.color = "gray";
        }
        else{
          document.querySelector('.fa-circle-left').style.color = "#252525";
        }
    
        if(Math.ceil(scrollElement.scrollLeft) === scrollElement.scrollWidth - scrollElement.clientWidth || Math.floor(scrollElement.scrollLeft) === scrollElement.scrollWidth - scrollElement.clientWidth ){
          document.querySelector('.fa-circle-right').style.color = "gray";
        }
        else{
          document.querySelector('.fa-circle-right').style.color = "#252525";
        }
    
      },[scroll]);

    
      const moveLeft = (e) =>{
        const scrollElement = document.getElementById("scrollbar");
        scrollElement.scrollLeft -= 150; 
      }
    
      const moveRight = (e) =>{
        const scrollElement = document.getElementById("scrollbar");
        scrollElement.scrollLeft += 150;
      }

    return(
        <div>
            <div className='w-full my-5 flex justify-between'>
                <div>
                    <h1 className="font-bold text-2xl">Deals for you</h1>
                </div>
                <div className='flex text-4xl gap-3'>
                    <i className="fa-regular fa-circle-left text-gray-500 " onClick={(e) => moveLeft(e)}></i>
                    <i className="fa-regular fa-circle-right text-[#252525]" onClick={(e) => moveRight(e)}></i>
                </div>
            </div>

            <div className='w-[80vw] h-auto overflow-x-auto scroll-smooth mx-auto ' id='scrollbar' onScroll={(e)=>setScroll(e.target.scrollLeft)}>
                <div className='w-max  flex flex-row gap-5'>
                    {
                      offers.length === 0  ? <ShimerCarousel/> :
                        offers.map((offer)=>{
                        return(
                        <OfferCard
                        {...offer?.info}
                        key = {offer?.info?.offerIds[0]}
                        />
                        )})
                    }
                </div>
            </div>
        </div>
    )
}

export default MenuOffer