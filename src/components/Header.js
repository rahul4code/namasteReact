import React, { useState, useContext } from "react";
import { IMG_CDN_URL } from "./../constants";
import { Link } from "react-router-dom";
// import Avatar from "./../../assets/images/Avatar.png";
import logoSwiggy from "./../../assets/images/logoSwiggy.png";
import { BsSearch, BsMinecart } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";
import { BiHelpCircle, BiChevronDown } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";

const Header = (props) => {
  const [authentication, setAuthentication] = useState(false);
  const [open, setOpen] = useState(false);
  const cartItems=useSelector(store=>store.cart.cartItems)
  console.log(cartItems, "Cart")
  // const {user,setUser}=useContext(UserContext);

  return (
    <div className="flex justify-between pt-4 pb-4 shadow-lg">
      <div className="flex">
        <img
          alt="NoImg"
          className="h-12 pl-40 z-30 hover:scale-110 cursor-pointer"
          src={logoSwiggy}
        />
        <span className="flex  hover:text-orange-600 cursor-pointer">
          <p className="text-gray-800 text-base font-semibold pt-[9px] pl-10 hover:text-orange-600 cursor-pointer">
            Other
          </p>
          <p className="text-gray-600 text-sm pt-3 pl-2 hover: cursor-pointer">
            Lucknow, Uttar Pradesh, India
          </p>
          <BiChevronDown className="pl-2 pt-2 text-4xl font-extrabold text-orange-600" />
        </span>
      </div>

      <ul className="flex pt-3 pr-40">
        <li className="px-7 text-gray-800 font-semibold">
          <Link className="flex hover:text-orange-600" to="/">
            <BsSearch className="mr-2.5 mt-1.5 font-extrabold " />
            Search
          </Link>
        </li>
        <li className="px-7 text-gray-800 font-semibold">
          <Link className="flex hover:text-orange-600" to="/">
            <TbDiscount2 className="mr-2.5 text-2xl mt-0.5" />
            Offers
          </Link>
        </li>
        <li className="px-7">
          <Link className="flex hover:text-orange-600" to="/">
            <BiHelpCircle className="mr-2.5 text-2xl mt-0.5" />
            Help
          </Link>
        </li>
        <UserContext.Consumer>
          { ({user, setUser}) => 
              <li
              className="px-7"
              onClick={() =>
                setUser({ name: "Rahul Gupta", email: "rahul4Code@gmail.com" })
              }
            >
              <Link className="flex hover:text-orange-600" to="/">
                <FaRegUser className="mr-2.5 text-xl mt-0.5" />
                {user?.name}
              </Link>
            </li>
            
          }
        </UserContext.Consumer>

        <li className="px-7">
          <Link className="flex hover:text-orange-600" to="/">
            <BsMinecart className="mr-2.5 text-2xl mt-0.5" />
            Cart
            <span className="absolute text-green-700 pl-2 pt-[5.5px] text-xs font-bold">{cartItems?.length }</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
