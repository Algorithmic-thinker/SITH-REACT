
export const API_URL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

export const IMG_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

export const CAROUSEL_IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

export const BAD_REQUEST_URL = "https://www.elegantthemes.com/blog/wp-content/uploads/2020/07/000-HTTP-Error-400.png";
export const UNAUTHORIZED_URL ="https://www.elegantthemes.com/blog/wp-content/uploads/2019/12/401-error-wordpress-featured-image.jpg";
export const FORBIDDEN_URL ="https://miro.medium.com/v2/resize:fit:1200/1*MIrLuyiCDpdNbnFYxYlKtA.png";
export const NOTFOUND_URL ="https://blog.thomasnet.com/hubfs/shutterstock_774749455.jpg";

export const createMenuUrl = (id) =>{
    return(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&submitAction=ENTER`)
}

export const MOBILE_API_URL = 'https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=19.07480&lng=72.88560&carousel=true&third_party_vendor=1'

export const MENU_IMAGE_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/`;