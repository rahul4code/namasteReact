
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer/HomeShimmer";
import OfferCarousel from "./Carousel/OffersCarousel";
import RestaurantContainer from "../containers/RestaurantContainer";
import { useGetRestaurants } from "../utils/useGetRestaurants";
import TabHeader from "./Header/TabHeader";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [carousel,setCarousel]=useState([])

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url=`https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING`
    const data = await fetch(url);
    const parsedData = await data.json();
    setRestaurants(parsedData?.data?.cards[2]?.data?.data?.cards);
    setCarousel(parsedData?.data?.cards[0]?.data?.data?.cards);
  }
  
  const renderRestaurantCard = () => {
    return (
      <>
        <TabHeader />
        <div className="border-[0.05px] border-gray-100 mx-10"></div>
        <RestaurantContainer restaurants={restaurants}/>
      </>
    );
  };

  return (
    <>
      <div data-testid="offerCarousel" className="bg-gray-900">
        {<OfferCarousel carousel={carousel}/>}
      </div>
      <div className="mx-32">
        {restaurants?.length > 0 ? renderRestaurantCard() : <Shimmer />}
      </div>
    </>
  );
};

export default Body;
