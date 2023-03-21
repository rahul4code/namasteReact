import CardDescription from "./CardDescription";

const RestaurantCard = ({
  name,
  avgRating,
  cloudinaryImageId,
  costForTwoString,
  slaString,
  cuisines,
}) => {
  let modifiedCuisnes = cuisines.join(", ");
  return (
    <div className="p-4 w-72 border-none hover:shadow-xl">
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
    </div>
  );
};

export default RestaurantCard;
