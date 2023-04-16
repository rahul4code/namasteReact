import { IMG_CDN_URL } from "../../constants";

const Card=({creativeId})=>{
    return(
        <img className="h-64 m-10" src={IMG_CDN_URL+creativeId} alt="No Img"/>
    )
}

export default Card;