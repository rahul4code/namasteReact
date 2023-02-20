import { RestaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants){
  console.log(searchText, restaurants)
  const filteredRestlist=restaurants.filter((restaurant)=>
    restaurant.data.name.includes(searchText)
  )
  return filteredRestlist;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants]=useState(RestaurantList);

  console.log("render")

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="search-input"
        />
      </div>
      <button
        type="text"
        onClick={()=>{
            const data=filterData(searchText, restaurants);
            setRestaurants(data)
          } 
        }
        className="search-input"
      >
        Button
      </button>
      <div className="resList">
        {restaurants.map((item) => {
          return (
            <RestaurantCard
              name={item.data.name}
              link={item.data.cloudinaryImageId}
              price={item.data.costForTwoString}
              rating={item.data.avgRating}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
