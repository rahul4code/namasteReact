import React from "react";
import RestaurantCard from "../components/RestaurantCard/Card";
import { Link } from "react-router-dom";
import ContainerShimmer from "../components/Shimmer/ContainerShimmer";

const RestaurantContainer=({restaurants})=>{
    return(
    restaurants ? 
        <div className="pt-5 flex justify-evenly flex-wrap gap-y-12">
        {restaurants.map((item) => {
          return (
            <Link
              to={`/restaurantdetails/${item.data.id}`}
              key={item.data.id}
            >
              <RestaurantCard {...item.data} />
            </Link>
          );
        })}
      </div> 
      : <ContainerShimmer />
    )
}

export default RestaurantContainer;