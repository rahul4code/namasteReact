import { useState, useEffect } from "react";
import Shimmer from "./Shimmer/HomeShimmer";
import OfferCarousel from "./Carousel/OffersCarousel";
import RestaurantContainer from "../containers/RestaurantContainer";
import { fetchRestaurantList } from "../slices/restaurantList";
import { useDispatch } from "react-redux";
import { useGetRestaurants } from "../slices/restaurantList";
import { useSearchParams } from "react-router-dom";
import { getRestaurantsURL } from "../utils/getRestaurantsURL";
import TabHeader from "./Header/TabHeader";
import CardDescription from "./RestaurantCard/CardDescription";
import { AiFillStar } from "react-icons/ai";

const Body = () => {
  const [restaurantTypes, setRestaurantTypes] = useState([]);
  const [topRestaurants, setTopRestaurants] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getRestaurantTypes();
    getTopRestaurants();
  }, []);

  async function getRestaurantTypes() {
    const url = `http://localhost:3000/api/getRestaurantTypes`;
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData, "resTypes");
    setRestaurantTypes(parsedData);
  }

  async function getTopRestaurants() {
    const url = `http://localhost:3000/api/getTopRestaurants`;
    const data = await fetch(url);
    const parsedData2 = await data.json();
    console.log(parsedData2, "TopResData");
    setTopRestaurants(parsedData2);
  }

  return (
    <div className="">
      <div
        data-testid="offerCarousel"
        className={`${
          restaurantTypes?.length === 0 && "bg-gray-800"
        } mx-[12rem]`}
      >
        {<OfferCarousel carousel={restaurantTypes} type={"restaurantTypes"} />}
        <hr className="m-9" />
        {<OfferCarousel carousel={topRestaurants} type={"topRestaurants"} />}
      </div>
      <div className="mx-36">
        <RestaurantContainer />
      </div>
    </div>
  );
};

export default Body;
