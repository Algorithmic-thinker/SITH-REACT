import RestaurantCard from '../component/RestaurantCard'

const CardContainer = () => {
    return(
        <div className=' flex justify-between flex-wrap py-4'>
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