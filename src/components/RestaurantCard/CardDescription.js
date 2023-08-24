import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

const CardDescription=({avgRating, slaString, costForTwoString})=>{

    return(
        <div className="flex justify-between pt-1">
        <span className={`flex text-xs w-fit pl-0.5 pr-2 pt-0.5 pb-0.5`}>
          <AiFillStar className={`text-white text-lg p-0.5 mr-1 rounded-full ${avgRating < 4 ? "bg-orange-500" : "bg-green-600"}`} />{" "}
          <p className="text-[1rem] text-gray-700"> {avgRating} </p>
        </span>
        {/* <BsDot />
        <p className="text-gray-700 text-xs"> {slaString} </p>
        <BsDot />
        <p className="text-gray-700 text-xs"> {costForTwoString} </p> */}
      </div>
    )
}

export default CardDescription;