import Card from "./Card";
import { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import RestaurantCard from "../RestaurantCard/Card";

const OfferCarousel = ({ carousel, type }) => {
  const isRestaurantTypes = type === "restaurantTypes";
  const scrollContainerRef = useRef(null);

  const handleScroll = (type) => {
    switch (type) {
      case "left":
        scrollContainerRef.current.scrollTo({
          left: scrollContainerRef.current.scrollLeft - 1000,
          behavior: "smooth",
        });
        break;
      case "right":
        scrollContainerRef.current.scrollTo({
          left: scrollContainerRef.current.scrollLeft + 1000,
          behavior: "smooth",
        });
      default:
        break;
    }
  };

  return (
    <>
      <div className="mt-3 mb-3">
        <div className="justify-between flex pt-5">
          <b className="text-2xl">
            &nbsp;
            {isRestaurantTypes
              ? "What's on your mind?"
              : "Top restaurant chains in Kanpur"}
          </b>
          <div className="flex gap-2">
            <button
              className="bg-gray-200 text-xs rounded-full p-1 text-black"
              onClick={() => handleScroll("left")}
            >
              <AiOutlineArrowLeft className="text-2xl" />
            </button>
            <button
              className="bg-gray-200 text-xs rounded-full p-1 text-black"
              onClick={() => handleScroll("right")}
            >
              <AiOutlineArrowRight className="text-2xl" />
            </button>
          </div>
        </div>

        <div
          className="flex overflow-y-hidden scroll-smooth gap-x-3"
          ref={scrollContainerRef}
        >
          {carousel?.map((item) =>
            isRestaurantTypes ? (
              <Card key={item?.id} creativeId={item.imageId} />
            ) : (
              <RestaurantCard key={item?.id} {...item} />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default OfferCarousel;
