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

const Body = () => {
  const [carousel, setCarousel] = useState([]);
  const dispatch=useDispatch()

  useEffect(() => {
    getData();
    dispatch(fetchRestaurantList());
  }, []);

  async function getData() {
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING`;
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData?.data?.cards[0]?.card.card.imageGridCards.info,"ParsedData")
    setCarousel(parsedData?.data?.cards[0]?.card.card.imageGridCards.info);
  }

  return (
    <>
      <div data-testid="offerCarousel" className={`${carousel?.length ===0 && "bg-gray-800"}`}>
        {<OfferCarousel carousel={carousel} />}
      </div>
      <div className="mx-36">
        <RestaurantContainer />
      </div>
    </>
  );
};

export default Body;
