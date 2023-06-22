import { IMG_CDN_URL } from "../../constants";

const Card=({creativeId})=>{
    return(
        <img className="h-[260px] mx-6 my-10  duration-300 hover:scale-105 cursor-pointer" src={IMG_CDN_URL+creativeId} alt="No Img"/>
    )
}

export default Card;