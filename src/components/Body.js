import RestaurantCard from "./RestaurantCard/Card";
import { useState, useEffect } from "react";
import Shimmer from "../components/shimmer/HomeShimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import OfferCarousel from "./carousel/OffersCarousel";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [carouselData, setCarouselData]=useState([]);
  const isOnline = useOnline();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchText?.length > 2) {
      filterData();
    } else if (searchText?.length === 0) {
      setFilteredRestaurant(restaurants);
    }
  }, [searchText]);

  async function getData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING"
    );
    const parsedData = await data.json();
    setFilteredRestaurant(parsedData?.data?.cards[2]?.data?.data?.cards);
    setRestaurants(parsedData?.data?.cards[2]?.data?.data?.cards);
    setCarouselData(parsedData?.data?.cards[0]?.data?.data?.cards);
  }

  function filterData() {
    const filteredRestlist = filteredRestaurant.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    setFilteredRestaurant(filteredRestlist);
  }

  if (!isOnline) {
    return <h2>You are offline. Please check your internet connection</h2>;
  }

  const renderRestaurantCard = () => {
    return (
      <>
        <div className="sticky top-0 flex justify-between px-12 pt-9 bg-white">
          <h2 className="text-[27px] text-gray-700 font-bold">
            324 restaurants
          </h2>
          <ol className="flex gap-11 text-[1rem] text-gray-500 pt-4">
            <li className="hover:text-gray-800 cursor-pointer border-b-2 pb-4 border-gray-700">Relevance</li>
            <li className="hover:text-gray-800 cursor-pointer">Delivery Time</li>
            <li className="hover:text-gray-800 cursor-pointer">Rating</li>
            <li className="hover:text-gray-800 cursor-pointer">Cost: Low to High</li>
            <li className="hover:text-gray-800 cursor-pointer">Cost: High to Low</li>
            <li className="hover:text-gray-800 cursor-pointer">Filters </li>
          </ol>
        </div>
        <div className="border-[0.05px] border-gray-100 mx-10"></div>
        <div className="pt-5 flex justify-evenly flex-wrap gap-y-12">
          {filteredRestaurant.map((item) => {
            return (
              <Link
                to={`/restaurantdetails/${item.data.id}`}
                key={item.data.id}
              >
                <RestaurantCard {...item.data} />
              </Link>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <div data-testid="offerCarousel" className="bg-gray-900">
        {<OfferCarousel carousel={carouselData}/>}
      </div>
      <div className="mx-32">
        {filteredRestaurant?.length > 0 ? renderRestaurantCard() : <Shimmer />}
      </div>
    </>
  );
};

export default Body;
