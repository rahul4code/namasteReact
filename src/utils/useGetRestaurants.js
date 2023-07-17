import { useEffect, useState } from "react";

export const useGetRestaurants = (sortBy, offset, url) => {
  const [restaurants, setRestaurants] =useState([]);
  const [isLoading, setIsLoading]=useState(false);

  useEffect(()=>{
    if(sortBy && sortBy!=="RELEVANCE"){
      setRestaurants([])
      getData();
    }else{
      setRestaurants([])
      getData();
    }
  },[sortBy])

  useEffect(()=>{
    setIsLoading(true)
    setRestaurants([...restaurants, ...Array(15).fill(null)])
    getData()
  },[offset])

  const getData = async () => {
    const data = await fetch(url);
    const parsedData = await data.json();
    if(!offset>0){
      if(!sortBy || sortBy==="RELEVANCE"){
        setRestaurants(parsedData?.data?.cards[2]?.data?.data?.cards)
      }else{
        setRestaurants(parsedData?.data?.cards[0]?.data?.data?.cards); 
      }
    }else{
        setRestaurants([...restaurants.filter(item=>item),...parsedData?.data?.cards.map(item=>item?.data)])
        setIsLoading(false)
        console.log(restaurants?.length, offset, "CurrentLength")
    }

  };
  return {restaurants, setRestaurants, isLoading};
};
