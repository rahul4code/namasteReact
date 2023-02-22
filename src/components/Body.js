import { RestaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

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

  useEffect(()=>{
    getData()
  },[])

  async function getData()
  {
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING")
    const parsedData=await data.json()
    console.log(parsedData);
    setRestaurants(parsedData?.data?.cards[2]?.data?.data?.cards)
  }

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
