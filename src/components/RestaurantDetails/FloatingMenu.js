import {BsMinecart} from "react-icons/bs";
import {ImSpoonKnife} from "react-icons/im";

const FloatingMenu=()=>{
    return(
        <div className="w-[52%] bottom-0 sticky">
        <div className="flex justify-center p-6">
          <button className="bg-[#5d8ed5] shadow-2xl w-35 pl-4 pr-4 pb-2.5 pt-2.5 rounded-full text-[13px] text-white font-bold"><ImSpoonKnife className="inline mr-1"/>BROWSE MENU</button>
        </div>
        <div className="bg-[#60b246] h-12 flex justify-between text-sm text-white font-bold">
          <span className="p-3 text-sm">1 Item | ₹435 </span>
          <span className="inline-flex pt-3.5" >VIEW CART  <BsMinecart className="m-2 text-lg mt-0.5 "/></span>
        </div>
      </div>
    )
}

export default FloatingMenu;