import RestaurantCard from '../component/RestaurantCard'

const CardContainer = () => {
    return(
        <div className=' flex gap-4 flex-wrap px-4 py-4'>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    )
}

export default CardContainer