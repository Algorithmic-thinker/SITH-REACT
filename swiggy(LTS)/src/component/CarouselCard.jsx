import { CAROUSEL_IMG_URL } from "../constant/config";

const CarouselCard = ({imageId, action}) =>{

    return(
        <div className="inline">
            <a href={action?.link}><img className="max-w-[15rem] h-auto inline" src={CAROUSEL_IMG_URL+imageId}/></a>
        </div>
    )
};

export default CarouselCard