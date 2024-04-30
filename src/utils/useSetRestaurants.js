import { useEffect, useState } from "react";
import axios from "axios";

const useSetRestaurants = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/getTopRestaurants"
    );
    const data = response.data;
    setRestaurantList(data);
  };

  return { restaurantList, setRestaurantList };
};

export default useSetRestaurants;
