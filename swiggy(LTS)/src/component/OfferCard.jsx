

const OfferCard = (offer) =>{
    console.log("offer", offer);
    return(
        <div className="border font-bold rounded-xl p-4 pe-20 flex gap-2">
            <img className= "max-w-full h-auto" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"/>
            <div className="flex flex-col justify-between" >
                <h1 className="text-xl">{offer?.info?.header}</h1>
                <h2 className="text-gray-300">{offer?.info?.couponCode}</h2>
            </div>
        </div>
        
    )
}

export default OfferCard