import React, {useEffect, useState} from "react";
import RestaurantCard from "../components/RestaurantCard/Card";
import { Link } from "react-router-dom";
import ContainerShimmer from "../components/Shimmer/ContainerShimmer";
import { useSearchParams } from "react-router-dom";
import { useGetRestaurants } from "../utils/useGetRestaurants";

const RestaurantContainer=({restaurants})=>{
    const [resData, setResData]=useState(restaurants)
    const [searchParams]=useSearchParams()
    const sortBy=searchParams.get("SortBy")

    useEffect(()=>{
      if(sortBy && sortBy!=="RELEVANCE"){
        setResData([])
        getData();
      }else{
        setResData(restaurants);
      }
    },[sortBy])

    console.log(restaurants, "Testing")

    async function getData(){
      const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&sortBy=${sortBy}&page_type=DESKTOP_WEB_LISTING`;

    const data = await fetch(url);
    const parsedData = await data.json();
      setResData(parsedData?.data?.cards[0]?.data?.data?.cards); 
    }

    console.log(resData, "ResData")


    return(
      resData && resData?.length>0 ? 
        <div className="pt-5 flex justify-evenly flex-wrap gap-y-12">
        {resData?.map((item) => {
          return (
            <Link
              to={`/restaurantdetails/${item?.data?.id}`}
              key={item?.data?.id}
            >
              <RestaurantCard {...item?.data} />
            </Link>
          );
        })}
      </div> 
      : <ContainerShimmer />
    )
}

export default RestaurantContainer;