export function getRestaurantsURL(sortBy, offset){
    let url=""
    if(offset===0){
    url = sortBy
      ? `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&sortBy=${sortBy}&page_type=DESKTOP_WEB_LISTING`
      : `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING`;
    }else{
       url=sortBy && offset>0 && `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&offset=${offset}&sortBy=${sortBy}&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
    }
    return url
}