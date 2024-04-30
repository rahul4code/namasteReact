import React, { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard/Card";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGetRestaurants } from "../utils/useGetRestaurants";
import { getRestaurantsURL } from "../utils/getRestaurantsURL";
import { CardShimmer } from "../components/Shimmer/CardShimmer";
import Shimmer from "../components/Shimmer/HomeShimmer";
import TabHeader from "../components/Header/TabHeader";
import { useDispatch, useSelector } from "react-redux";
import { setOffset } from "../slices/activeOffset";
import { useSelector } from "react-redux";
import { fetchRestaurantList } from "../slices/restaurantList";
import useSetRestaurants from "../utils/useSetRestaurants";

const RestaurantContainer = () => {
  const dispatch = useDispatch();
  const offset = useSelector((store) => store?.restaurantOptions?.offset);
  const [searchParams] = useSearchParams();
  let sortBy = searchParams.get("SortBy");
  sortBy = sortBy ?? "RELEVANCE";
  const { restaurantList, setRestaurantList } = useSetRestaurants();
  const [filteredList, setFilteredList] = useState([]);
  const [filters, setFilters] = useState([]);

  function handleScroll() {
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
      setRestaurantList([...restaurantList, ...restaurantList]);
  }

  useEffect(() => {
    setFilteredList(restaurantList);
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [restaurantList]);

  console.log(filteredList, "filteredList");

  function filterRestaurants(type) {
    if (!filters.includes(type)) {
      setFilters([...filters, type]);
    }
    switch (type) {
      case "FastDelivery":
        setFilteredList(() => {
          return restaurantList.filter((item) =>
            item?.slaString?.includes("25")
          );
        });
        break;
      case "NewOnSwiggy":
        setFilteredList(() => {
          return restaurantList.filter(
            (item) => item?.areaName === "Hazratganj"
          );
        });
        break;
      case "4+Ratings":
        setFilteredList(() => {
          return restaurantList.filter((item) => item?.avgRatingString > 4);
        });
        break;
      case "300-600":
        setFilteredList(() => {
          return restaurantList.filter(
            (item) => !item?.aggregatedDiscountInfoV3.subHeader
          );
        });
        break;
      default:
        break;
    }
  }

  function resetFilters() {
    setFilteredList(restaurantList);
    setFilters([]);
  }

  return filteredList.length > 0 ? (
    <>
      <hr className="mx-44" />
      <TabHeader
        filterRestaurants={filterRestaurants}
        filters={filters}
        resetFilters={resetFilters}
      />
      <div className="justify-evenly flex-wrap grid md:grid-cols-4 gap-5 mx-44">
        {filteredList?.map((item, index) => {
          return item ? (
            <Link to={`/restaurantdetails/${item?.id}`} key={item?.info?.id}>
              <RestaurantCard {...item} />
            </Link>
          ) : (
            <CardShimmer key={index} />
          );
        })}
      </div>
    </>
  ) : (
    <Shimmer />
  );
};

export default RestaurantContainer;
