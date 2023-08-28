import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import { setOffset } from "../slices/activeOffset";
import { updateRestaurantList, setRestaurantList, addEmptyRestaurant, removeEmptyRestaurant } from "../slices/restaurantList";

export const useGetRestaurants = (sortBy, offset, url) => {
  console.log(sortBy, offset, url, "params")
  const dispatch = useDispatch();
  const restaurants = useSelector((store) => store.restaurants.restaurantList);
  // const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (offset > 0) {
  //     window.scrollTo({ top: 350, behavior: "smooth" });
  //   }
  //   dispatch(setOffset(0));
  //   if (restaurants.length > 0) {
  //     setRestaurants([]);
  //     setIsLoading(true);
  //     setRestaurants(Array(15).fill(null));
  //   }
  //   getData();
  // }, [sortBy]);

  useEffect(() => {
    if (offset > 16) {
      dispatch(addEmptyRestaurant());
      getData()
    }
  }, [offset]);

  useEffect(()=>{
      getData();
  },[])


  const getData = async () => {
    const data = await axios.get(url);
    const parsedData = await data.data;
    const fetchedRestaurants = parsedData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(fetchedRestaurants, offset, "fetchedRestaurants")
      if (sortBy === "RELEVANCE" && offset === 0) {
          await dispatch(setRestaurantList(fetchedRestaurants));
      } else{
          await dispatch(removeEmptyRestaurant());
          await dispatch(updateRestaurantList(fetchedRestaurants));
      }
      // else {
      //   if (sortBy === "RELEVANCE" && restaurants.length > 0) {
      //     setRestaurants(parsedData?.data?.cards[2]?.data?.data?.cards);
      //     setIsLoading(false);
      //   } else {
      //     setRestaurants(parsedData?.data?.cards[0]?.data?.data?.cards);
      //     setIsLoading(false);
      //   }
      // }
    // }
    //  else {
    //   setRestaurants([
    //     ...restaurants.filter((item) => item),
    //     ...parsedData?.data?.cards.map((item) => item?.data),
    //   ]);
    //   setIsLoading(false);
    // }
  };
  // return { restaurants, setRestaurants, isLoading };
};
