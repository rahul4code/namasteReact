import { TbDiscount2 } from "react-icons/tb";

const Coupon=()=>{
    return (
        <button className="p-3 pr-7 shadow-sm border rounded-md min-w-fit">
            <div className="flex">
              <TbDiscount2 className="text-xl mr-2 text-amber-800" />
              <b className="text-gray-600 text-sm font-extrabold">
                50% OFFUPTO ₹100
              </b>
            </div>
            <b className="text-gray-500 text-[10px] mt-1 flex">
              USE TRYNEW | ABOVE ₹149
            </b>
          </button>
    )
}
export default Coupon;