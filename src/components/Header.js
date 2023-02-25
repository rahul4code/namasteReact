import React, { useState } from "react";
import { IMG_CDN_URL } from "./../constants";
import { Link } from "react-router-dom";
import Avatar from "./../../assets/images/Avatar.png";

const Header = (props) => {
  const [authentication, setAuthentication] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <img alt="NoImg" className="logo" src={IMG_CDN_URL} />
      <ul className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
        <li>
          {!authentication ? (
            <Link to="/Registration" style={{borderRadius:'10px', color:'white',background:'#e67e22', padding:'0.5em'}}>
              Order Now
            </Link>
          ) : (
            <div>
              <Link to="/Registration">
                <img
                  onClick={(e) => {setOpen(!open)}}
                  src={Avatar}
                  style={{ height: "55px" }}
                />
              </Link>
              <div style={{ position:'absolute', boxShadow:' 2px 2px 3px -1px', top:'10%', display:open ? 'block' : 'none'}}>
              <ul style={{listStyle:'none', lineHeight:'33px', zIndex:'9999', padding:'15px 12px 12px 11px'}}>
                <li>Logout</li>
                <li>Edit Profile</li>
              </ul>
              </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
