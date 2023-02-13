const RestaurantCard = (props) => {
    return (
      <div className="card">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            `${props.link}`
          }
          alt="foodImg"
          width="300px"
        />
        <h2> {props.name} </h2>
        <h2> {props.price} </h2>
        <h2> {props.rating} </h2>
      </div>
    );
  };

  export default RestaurantCard;