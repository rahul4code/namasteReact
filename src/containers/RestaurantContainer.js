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

const RestaurantContainer = () => {
  const dispatch = useDispatch();
  const offset = useSelector((store) => store?.restaurantOptions?.offset);
  const [searchParams] = useSearchParams();
  let sortBy = searchParams.get("SortBy");
  sortBy = sortBy ?? "RELEVANCE";

  const url = getRestaurantsURL(sortBy, offset);
  console.log(url)
  useGetRestaurants(sortBy, offset, url);
  // const isLoading = false;
  const restaurants = useSelector((store) => store.restaurants.restaurantList);

  function handleScroll() {
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
      dispatch(setOffset(offset + 16));
  }

  // console.log(restaurants,"restaurants")

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return restaurants && restaurants.length > 0 ? (
    <>
      <TabHeader />
      <div className="border-[0.05px] border-gray-100 mx-10"></div>
      <div className="pt-5 justify-evenly flex-wrap gap-y-12 grid md:grid-cols-4 gap-10 mx-5">
        {restaurants?.map((item, index) => {
          return  item ? (
            <Link
              to={`/restaurantdetails/${item?.info?.id}`}
              key={item?.info?.id}
            >
              <RestaurantCard {...item?.info} />
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
