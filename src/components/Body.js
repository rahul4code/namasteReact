
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer/HomeShimmer";
import OfferCarousel from "./Carousel/OffersCarousel";
import RestaurantContainer from "../containers/RestaurantContainer";
import { useGetRestaurants } from "../utils/useGetRestaurants";
import { useSearchParams } from "react-router-dom";
import { getRestaurantsURL } from "../utils/getRestaurantsURL";
import TabHeader from "./Header/TabHeader";

const Body = () => {
  const [searchParams]=useSearchParams()
  const sortBy=searchParams.get("SortBy")
  const sortVal=sortBy ?? "RELEVANCE"
  const [carousel,setCarousel]=useState([])

  const url=getRestaurantsURL(sortBy, 0)
  const {restaurants} = useGetRestaurants(sortBy, 0, url);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url=`https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING`
    const data = await fetch(url);
    const parsedData = await data.json();
    setCarousel(parsedData?.data?.cards[0]?.data?.data?.cards);
  }
  
  const renderRestaurantSection = () => {
    return (
      <>
        <div className="border-[0.05px] border-gray-100 mx-10"></div>
        <RestaurantContainer sortBy={sortVal}/>
      </>
    );
  };

  console.log("from Tab Body")

  return (
    <>
      <div data-testid="offerCarousel" className="bg-gray-900">
        {<OfferCarousel carousel={carousel}/>}
      </div>
      <div className="mx-32">
      <TabHeader />
        {restaurants?.length > 0 ? renderRestaurantSection() : <Shimmer />}
      </div>
    </>
  );
};

export default Body;
