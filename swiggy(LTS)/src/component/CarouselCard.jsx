import { CAROUSEL_IMG_URL } from "../constant/config";

const CarouselCard = ({imageId, action}) =>{

    return(
        <div>
            <a href={action?.link}><img className="sm:max-w-[10rem] max-w-[7rem] h-auto" src={CAROUSEL_IMG_URL+imageId}/></a>
        </div>
    )
};

export default CarouselCard