import CardDescription from "./CardDescription";
import { TbDiscount2 } from "react-icons/tb";
import { IMG_CDN_URL } from "../../constants";

const RestaurantCard = (props) => {
  return (
    <div className="p-4 gap-x-10 duration-300 hover:scale-105 cursor-pointer min-w-[280px]">
      <img
        className="rounded-lg h-[190px] min-w-[260px]"
        src={IMG_CDN_URL + "/" + props?.cloudinaryImageId}
        alt="foodImg"
      />

      <CardDescription {...props} />
    </div>
  );
};

export default RestaurantCard;
