import { BsSearch } from "react-icons/bs";
import Breadcrumb from "./Breadcrumb";
import RestaurantBanner from "./RestaurantBanner";
import { TbDiscount2, TbClockHour7 } from "react-icons/tb";
import Coupon from "./Coupon";
import { useParams } from "react-router-dom";
import { useRestaurant } from "../../utils/useRestaurant";
import FloatingMenu from "./FloatingMenu"
import {HiOutlineCurrencyRupee} from "react-icons/hi"
import Recommended from "./Recommended";

const Restaurant = () => {
  const {id}=useParams();

  return (
    <div className="flex items-center flex-col">
      <main className="w-6/12">
        <section className="flex pt-8">
          <Breadcrumb />
          <BsSearch className="text-lg text-gray-800 font-semibold" />
        </section>
{id}
        <section>
        <RestaurantBanner />
        </section>
        
        <section>
          <div className="flex pt-4 text-gray-800">
            <span className="flex">
              <TbClockHour7 className="text-2xl m-0.5"/>
              <b className="pl-2">34 MINS</b>
            </span>
            <span className="flex pl-4">
              <HiOutlineCurrencyRupee className="text-2xl mt-0.5"/>
              <b className="pl-2 ">₹50 for two</b>
            </span>
          </div>
        </section>

        <section className="pt-5 pb-3 flex overflow-y-hidden w-inherit gap-x-4">
          <Coupon />
          <Coupon />
          <Coupon />
          <Coupon />
        </section>
        
        <section>
           <Recommended />
        </section>
      </main> 
      <FloatingMenu />
    </div>
  );
};

export default Restaurant;
