import Card from "./Card";
import { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const OfferCarousel = ({ carousel }) => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (type) => {
    console.log(scrollContainerRef, "scrollContainer");
    switch (type) {
      case "left":
        scrollContainerRef.current.scrollLeft -= 1000;
        setTimeout(() => {
          scrollContainerRef.current.parentElement.firstChild.style.visibility =
            "hidden";
        }, 200);
        scrollContainerRef.current.parentElement.firstChild.style.visibility =
            "hidden";
        break;
      case "right":
        scrollContainerRef.current.scrollLeft += 1000;
        scrollContainerRef.current.parentElement.firstChild.style.visibility =
          "visible";
      default:
        break;
    }
  };

  return (
    <>
      {carousel?.length > 0 ? (
        <div className="h-[340px] mx-[8rem] flex">
          <button
            className="bg-white h-12 w-12 rounded-full p-3 text-gray-700 z-10 place-self-center invisible"
            onClick={() => handleScroll("left")}
          >
            <AiOutlineArrowLeft className="text-2xl" />
          </button>
          <div
            className="flex w-[100%] overflow-y-hidden scroll-smooth hidden-scrollbar"
            ref={scrollContainerRef}
          >
            {carousel?.map((item) => (
              <Card key={item?.data?.bannerId} {...item.data} />
            ))}
          </div>
          <button
            className="bg-white h-12 w-12 rounded-full p-3 text-gray-700 z-10 place-self-center"
            onClick={() => handleScroll("right")}
          >
            <AiOutlineArrowRight className="text-2xl" />
          </button>
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
