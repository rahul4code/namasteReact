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
    <>
      <div className={`${restaurantTypes?.length > 0 && "mx-44"}`}>
        {restaurantTypes?.length > 0 ? (
          <div data-testid="offerCarousel">
            <OfferCarousel
              carousel={restaurantTypes}
              type={"restaurantTypes"}
            />
            <hr />
            {
              <OfferCarousel
                carousel={topRestaurants}
                type={"topRestaurants"}
              />
            }
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col h-[340px] bg-gray-800">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-300"></div>
            <h2 className="text-gray-300 text-[1.7rem] mt-8 font-normal">
              Looking for great food near you ...
            </h2>
          </div>
        )}
      </div>
      <div>
        <RestaurantContainer />
      </div>
    </>
  );
};

export default Body;
