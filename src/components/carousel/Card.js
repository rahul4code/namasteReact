import { IMG_CDN_URL } from "../../constants";

const Card = ({ creativeId }) => {
  return (
    <img
      className="h-[200px] mx-1 py-2 duration-300 hover:scale-105 cursor-pointer"
      src={IMG_CDN_URL + "w_288,h_360/" + creativeId}
      alt="No Img"
    />
  );
};

export default Card;
