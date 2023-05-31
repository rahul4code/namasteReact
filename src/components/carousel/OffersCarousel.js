import Card from "./Card";

const OfferCarousel = ({ carousel }) => {
  return (
    <>
      {carousel?.length > 0 ? (
        <div className="flex pr-[8rem] h-[340px] pl-[8rem] overflow-y-hidden">
          {
            carousel?.map((item) => (
              <Card key={item?.data?.bannerId} {...item.data} />
            ))
          }
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col h-[340px]">
            <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-300"></div>
            <h2 className="text-gray-300 text-[1.7rem] mt-8 font-normal">
              Looking for great food near you ...
            </h2>
          </div>
      )}
    </>
  );
};

export default OfferCarousel;
