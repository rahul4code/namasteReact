import React, {useEffect, useState} from "react";
import RestaurantCard from "../components/RestaurantCard/Card";
import { Link } from "react-router-dom";
import ContainerShimmer from "../components/Shimmer/ContainerShimmer";
import { useGetRestaurants } from "../utils/useGetRestaurants";
import { getRestaurantsURL } from "../utils/getRestaurantsURL";
import { CardShimmer } from '../components/Shimmer/CardShimmer'

const RestaurantContainer=({sortBy})=>{
    const [offset, setOffset]=useState(0)
    const url=getRestaurantsURL(sortBy, offset)
    const {restaurants, isLoading} = useGetRestaurants(sortBy, offset, url);
    // console.log(sortBy, "SortBy")


    function handleScroll(){
      window.innerHeight + window.scrollY >= document.body.offsetHeight-200 && 
      setOffset(prevOffset=>prevOffset+16)
    }

    useEffect(()=>{
      window.addEventListener("scroll", handleScroll)
      return(function(){
        window.removeEventListener("scroll", handleScroll)
      })
    },[isLoading])

    return(

        <div className="pt-5 justify-evenly flex-wrap gap-y-12 grid md:grid-cols-4 gap-10 mx-5">
          { 
          (restaurants && restaurants.length>0) &&
          restaurants?.map((item, index) => {
          return item ?
           (
            <Link
              to={`/restaurantdetails/${item?.data?.id}`}
              key={item?.data?.id}
            >
              <RestaurantCard {...item?.data} />
            </Link>
          ): <CardShimmer key={index}/>
        }) 
      }
      </div> 
      // : <ContainerShimmer />
    )
}

export default RestaurantContainer;