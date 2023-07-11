
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer/HomeShimmer";
import useOnline from "../utils/useOnline";
import OfferCarousel from "./Carousel/OffersCarousel";
import FixedHeader from "./header/fixedHeader";
import RestaurantContainer from "../containers/RestaurantContainer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [carouselData, setCarouselData]=useState([]);
  const isOnline = useOnline();

  useEffect(() => {
    getData();
  }, []);

  // useEffect(()=>{
  //     const scrollPosition=window.screenY
  //       console.log(scrollPosition, "scroolled")
  // },[])

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
        <FixedHeader />
        <div className="border-[0.05px] border-gray-100 mx-10"></div>
        <RestaurantContainer restaurants={filteredRestaurant}/>
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
