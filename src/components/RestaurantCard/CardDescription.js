import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

const CardDescription = (props) => {
  let modifiedCuisines = props?.cuisines?.join(", ");
  return (
    <div className="relative bottom-9 left-2">
      <p className="text-white font-extrabold text-xl h-7">
        {props?.aggregatedDiscountInfoV3?.subHeader &&
          "ITEMS " + props?.aggregatedDiscountInfoV3?.subHeader}
      </p>
      <h2 className="pt-4 text-lg font-bold text-gray-700 break-normal">
        {props?.name}
      </h2>
      <div className="flex pt-1 font-bold">
        <span className={`flex text-xs w-fit pl-0.5 pr-2 pt-0.5 pb-0.5`}>
          <AiFillStar
            className={`text-white text-lg p-0.5 mr-1 rounded-full ${
              props?.avgRating < 4 ? "bg-orange-500" : "bg-green-600"
            }`}
          />{" "}
          <p className="text-[1rem] text-gray-700">
            {" "}
            {props?.avgRatingString}{" "}
          </p>
          <BsDot className="text-lg" />
          <p className="text-gray-700 text-[1rem]"> {props?.slaString} </p>
        </span>
      </div>

      {/* <BsDot /> */}
      {/* <p className="text-gray-700 text-xs"> {costForTwoString} </p> */}
      <p className="w-[inherit] text-sm text-gray-500 overflow-hidden whitespace-nowrap overflow-ellipsis">
        {modifiedCuisines}
      </p>

      <p className="text-[16px] text-gray-500">{props?.areaName}</p>
    </div>
  );
};

export default CardDescription;
