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
      {carousel?.length > 0 ? (
        <div className="">
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
      ) : (
        <div className="flex justify-center items-center flex-col h-[340px]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-300"></div>
          <h2 className="text-gray-300 text-[1.7rem] mt-8 font-normal">
            Looking for great food near you ...
          </h2>
        </div>
      )}
    </>
  );
};

export default OfferCarousel;
