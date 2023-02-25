import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer";

const RestaurantMenu=()=>{
    const [restaurantDetail,setRestaurantDetails]=useState(null)
    const {id}=useParams();
    
    useEffect(()=>{
        getRestaurantDetails()
    },[]);

    async function getRestaurantDetails()
    {
        const data=await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=26.8466937&lng=80.94616599999999&menuId="+id)
        const parsedData=await data.json()
        setRestaurantDetails(parsedData.data);
    }
 
    return restaurantDetail ? (<>
    <h1>This is the ResId:{id}</h1>
    <h2>Restauranr Name: {restaurantDetail?.name}</h2>
    </>): <Shimmer/>
}

export default RestaurantMenu;