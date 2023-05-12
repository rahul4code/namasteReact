import { useEffect,useState } from "react";
import Card from "./Card"

const OfferCarousel = () => {
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    getCarousel();
  }, []);

  const getCarousel = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING"
    );
    const parsedData = await data.json();
    setCarousel(parsedData?.data?.cards[0]?.data?.data?.cards);
  };

  return (
    <>
      <div className="flex pr-[8rem] pl-[8rem] overflow-y-hidden h-[340px]">
        {carousel?.map((item) => (
          <Card key={item?.data?.bannerId} {...item.data} />
        ))}
      </div>
    </>
  );
};

export default OfferCarousel;
