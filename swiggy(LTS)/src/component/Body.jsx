import { useOutletContext } from 'react-router'
import CardContainer from '../component/CardContainer'


const Body = () =>{
    const searchInputRef = useOutletContext();
    return(
        <div className='xl:px-36 lg:px-20  sm:px-16 w-full'>
            
            <CardContainer searchInputRef={searchInputRef}/>

        </div>
    )
}

export default Body