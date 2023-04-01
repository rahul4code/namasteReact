import { useEffect,useState } from "react";
import { RES_DETAIL_URL } from "../constants";

const useRestaurant=(id)=>{
    const [restaurantDetail,setRestaurantDetails]=useState(null)
    useEffect(()=>{
        getRestaurantDetails()
    },[]);

    async function getRestaurantDetails()
    {
        const data=await fetch(RES_DETAIL_URL+id)
        const parsedData=await data.json()
        setRestaurantDetails(parsedData.data);
    }

    return restaurantDetail;
}

export default useRestaurant;