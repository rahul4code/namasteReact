import {IMG_CDN_URL} from "./../constants"

const Header = () => {
    return (
      <div className="header">
        <img
          alt="NoImg"
          className="logo"
          src={IMG_CDN_URL}
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

  export default Header;