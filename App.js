import React from "react";
import ReactDOM from "react-dom/client";
import { RestaurantList } from "./restaurant.js";

// const title=<span>My bio</span>
// const TitleAsFunc=()=>{
//     return (<p>How are you</p>)
// }

const Header = () => {
  return (
    <div className="header">
      <img
        alt="NoImg"
        className="logo"
        src="https://img.freepik.com/premium-vector/food-festival-logo-design-template_96807-1188.jpg"
      />
      <ul className="list">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

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

const Body = () => {
  return (
    <div className="resList">
      {RestaurantList.map((item) => {
        return (
          <RestaurantCard
            name={item.data.name}
            link={item.data.cloudinaryImageId}
            price={item.data.costForTwoString}
            rating={item.data.avgRating}
          />
        );
      })}
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const Layout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);
