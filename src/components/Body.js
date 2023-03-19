import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "../Shimmer";
import {Link} from "react-router-dom"
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants]=useState([]);
  const [filteredRestaurant, setFilteredRestaurant]=useState([]);
  const isOnline=useOnline();

  useEffect(()=>{
    getData()
  },[])

  useEffect(()=>{
    if(searchText?.length>2)
    {
      filterData()
    }
    else if(searchText?.length===0)
    {
      setFilteredRestaurant(restaurants)
    }
  },[searchText])

  async function getData()
  {
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING")
    const parsedData=await data.json()
      setFilteredRestaurant(parsedData?.data?.cards[2]?.data?.data?.cards)
    setRestaurants(parsedData?.data?.cards[2]?.data?.data?.cards)

  }

  function filterData(){
    const filteredRestlist=filteredRestaurant.filter((restaurant)=>
      restaurant?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
    )
    setFilteredRestaurant(filteredRestlist);
  }
  
  if(!isOnline){
    return (<h2>You are offline. Please check your internet connection</h2>)
  }

  const renderRestaurantCard=()=>{
    return(
      <div className="resList">
        {filteredRestaurant.map((item) => {
          return (
            <Link to={`/restaurantmenu/${item.data.id}`} key={item.data.id}>
            <RestaurantCard {...item.data}/>
            </Link>
          );
        })}
      </div>
    )
  }

  return (
    <>
      <div className="bodyCard">
        <div className="searchContainer">
        <input
          type="text"
          placeholder="Search for restaurant and food"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="search-input"
        />
        </div>
      </div>
      {
      filteredRestaurant?.length >0 ? renderRestaurantCard() : <Shimmer />
      }
    </>
  );
};

export default Body;
