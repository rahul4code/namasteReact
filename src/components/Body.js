import RestaurantCard from "./RestaurantCard/Card";
import { useState, useEffect } from "react";
import Shimmer from "../Shimmer";
import {Link} from "react-router-dom"
import useOnline from "../utils/useOnline";
import OfferCarousel from "./carousel/OffersCarousel";

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
      <div className="pt-8 flex justify-evenly flex-wrap gap-y-12">
        {filteredRestaurant.map((item) => {
          return (
            <Link to={`/restaurantdetails/${item.data.id}`} key={item.data.id}>
            <RestaurantCard {...item.data}/>
            </Link>
          );
        })}
      </div>
    )
  }

  return (
    <>
    <div className="h-[340px] bg-gray-900">
      {<OfferCarousel />}
    </div>
      {/* <div className="bodyCard">
        <div className="searchContainer">
        <input
          type="text"
          placeholder="Search for restaurant and food"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="search-input"
        />
        </div>
      </div> */}
      <div>
        <div className="mx-32 h-24">
        <h2 className="text-[25px] text-gray-800 pt-8 pb-4 font-bold px-10 ">1416 restaurants</h2>
        <div className="border-[0.05px] border-gray-100 mx-10"></div>
          {
          filteredRestaurant?.length >0 ? renderRestaurantCard() : <Shimmer />
          }
        </div>
      </div>
    </>
  );
};

export default Body;
