import CardDescription from "./CardDescription";
import {TbDiscount2} from "react-icons/tb";

const RestaurantCard = ({
  name,
  avgRating,
  cloudinaryImageId,
  costForTwoString,
  slaString,
  cuisines,
  ribbon,
  aggregatedDiscountInfo
}) => {
  let modifiedCuisnes = cuisines.join(", ");
  return (
    <div className="p-4 w-72 border-none hover:shadow-xl">
      {
        ribbon && <div className="absolute ml-[-10px] grid">
        <span className="bg-gray-700 px-2 py-1 text-white font-bold text-sm">Promoted</span>
        <div className="h-0 w-0 ribbon-border"></div>
      </div>
      }
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          `${cloudinaryImageId}`
        }
        alt="foodImg"
        width="250px"
      />
      <h2 className="pt-3 font-semibold break-normal"> {name} </h2>
      <p className="text-xs inline-flex text-gray-500">{modifiedCuisnes}</p>
      <CardDescription avgRating={avgRating} costForTwoString={costForTwoString} slaString={slaString} />
      {
        aggregatedDiscountInfo ? 
        <div>
          <hr className="mt-4"/>
          <span className="flex pt-2 text-amber-900 hover:border-b-1">
            <TbDiscount2 />
             <p className="text-xs pl-1 font-semibold">{aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}</p>
          </span>
          <hr className="mt-2"/>
          <p className="text-center text-xs pt-3 text-blue-400 font-bold uppercase">Quick View</p>
        </div> : null
      }

    </div>
  );
};

export default RestaurantCard;
