import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer";
import useRestaurant from "./../utils/useRestaurants"

const RestaurantMenu=()=>{
    const {id}=useParams();
    const restaurantDetail=useRestaurant(id)
  
 
    return restaurantDetail ? (<>
    <h1>This is the ResId:{id}</h1>
    <h2>Restauranr Name: {restaurantDetail?.name}</h2>
    </>): <Shimmer/>
}

export default RestaurantMenu;