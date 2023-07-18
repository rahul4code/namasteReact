import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setOffset } from "../slices/activeOffset";
export const useGetRestaurants = (sortBy, offset, url) => {
  const dispatch = useDispatch();
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (offset > 0) {
      window.scrollTo({ top: 350, behavior: "smooth" });
    }
    dispatch(setOffset(0));
    if (restaurants.length > 0) {
      setRestaurants([]);
      setIsLoading(true);
      setRestaurants(Array(15).fill(null));
    }
    getData();
  }, [sortBy]);

  useEffect(() => {
    if (offset > 16) {
      setRestaurants([...restaurants, ...Array(15).fill(null)]);
      getData();
    }
  }, [offset]);

  const getData = async () => {
    const data = await fetch(url);
    const parsedData = await data.json();
    if (!offset > 0) {
      if (sortBy === "RELEVANCE" && restaurants.length === 0) {
        setRestaurants(parsedData?.data?.cards[2]?.data?.data?.cards);
      } else {
        if (sortBy === "RELEVANCE" && restaurants.length > 0) {
          setRestaurants(parsedData?.data?.cards[2]?.data?.data?.cards);
          setIsLoading(false);
        } else {
          setRestaurants(parsedData?.data?.cards[0]?.data?.data?.cards);
          setIsLoading(false);
        }
      }
    } else {
      setRestaurants([
        ...restaurants.filter((item) => item),
        ...parsedData?.data?.cards.map((item) => item?.data),
      ]);
      setIsLoading(false);
    }
  };
  return { restaurants, setRestaurants, isLoading };
};
