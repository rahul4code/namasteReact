import {TbBike} from "react-icons/tb"
import { AiFillStar } from "react-icons/ai";

const RestaurantBanner=()=>{
    return(
        <div className="pl-2 pt-8 flex justify-between border-gray-300 border-dashed border-b pb-4">
        <div>
        <p className="font-bold text-lg text-gray-800 ">Sardar Ji Ke Mashoor Chhole Bhature</p>
        <p className="text-xs pt-2 text-gray-500">North Indian, Punjabi</p>
        <p className="text-xs pt-1 text-gray-500">Lalbagh 1.6 km</p>
        <p className=" text-xs pt-4 text-gray-500 flex"><TbBike className="text-lg font-extrabold mr-2" /> 1.6 kms | ₹21 Delivery fee will apply</p>
        </div>
        <div className="border p-1 h-fit shadow-sm">
            <span className="flex p-2 text-lg font-semibold text-green-600">
            <AiFillStar/> <b className="text-sm">4.2</b>
            </span>
            <hr/>
            <b className="text-gray-500 font-bold text-[9.5px] p-1">10k+ ratings</b>
        </div>
        </div>
    )
}

export default RestaurantBanner;