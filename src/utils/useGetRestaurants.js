import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useGetRestaurants = () => {
  const [searchParams]=useSearchParams();
  const sortBy=searchParams.get("SortBy")
    const [restaurantCards, setRestaurantCards]=useState([]);
    const [carousel, setCarousel]=useState([])
  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const url = sortBy
      ? `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&sortBy=${sortBy}&page_type=DESKTOP_WEB_LISTING`
      : `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setRestaurantCards(parsedData?.data?.cards[2]?.data?.data?.cards); 
    setCarousel(parsedData?.data?.cards[0]?.data?.data?.cards);
  };
  return [restaurantCards, carousel];
};
