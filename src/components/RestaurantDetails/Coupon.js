import { TbDiscount2 } from "react-icons/tb";

const Coupon=(props)=>{
  const {header,couponCode, description}=props?.info;
    return (
        <button className="p-3 pr-7 shadow-sm border rounded-md min-w-fit">
            <div className="flex">
              <TbDiscount2 className="text-xl mr-2 text-amber-800" />
              <b className="text-gray-600 text-sm font-extrabold">
               {header}
              </b>
            </div>
            <b className="text-gray-500 text-[10px] mt-1 flex">
              {couponCode} | {description}
            </b>
          </button>
    )
}
export default Coupon;