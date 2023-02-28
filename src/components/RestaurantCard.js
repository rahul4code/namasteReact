const RestaurantCard = ({
  name,
  avgRating,
  cloudinaryImageId,
  costForTwoString,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          `${cloudinaryImageId}`
        }
        alt="foodImg"
        width="300px"
      />
      <h2> {name} </h2>
      <h2 style={{ color: "darkgreen" }}> {costForTwoString} </h2>
      <h2 style={{ color: "green" }}> {avgRating} </h2>
    </div>
  );
};

export default RestaurantCard;
