import { BsSearch } from "react-icons/bs";
import Breadcrumb from "./Breadcrumb";
import RestaurantBanner from "./RestaurantBanner";
import { TbDiscount2, TbClockHour7 } from "react-icons/tb";
import Coupon from "./Coupon";
import { useParams } from "react-router-dom";
import { useRestaurant } from "../../utils/useRestaurant";
import FloatingMenu from "./FloatingMenu";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import Menu from "./Menu";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import React, {memo} from "react";

const Restaurant = () => {
  const { id } = useParams();
  const [resDetails, setResDetails] = useState([]);
  const cartItems=useSelector(store=>store?.cart?.cartItems)

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=${id}&submitAction=ENTER`
    );
    const data = await response.json();
    setResDetails(data?.data?.cards);
    console.log(data.data.cards, "resDetails");
  }

  const memoizedMenuContent = useMemo(() => {
    return resDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      .splice(
        1,
        resDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length - 3
      )
      ?.map((item, index) => <Menu key={index} {...item} />);
  }, [resDetails]);

  return resDetails?.length > 0 ? (
    <div className="flex items-center flex-col">
      <main className="w-6/12">
        <section className="flex pt-8">
          <Breadcrumb data={resDetails[0]?.card?.card?.info} />
          <BsSearch className="text-lg text-gray-800 font-semibold" />
        </section>
        <section>
          <RestaurantBanner data={resDetails[0]?.card?.card?.info} />
        </section>

        <section>
          <div className="flex pt-4 text-gray-800">
            <span className="flex">
              <TbClockHour7 className="text-2xl m-0.5" />
              <b className="pl-2">
                {resDetails[0]?.card?.card?.info?.sla?.slaString}
              </b>
            </span>
            <span className="flex pl-4">
              <HiOutlineCurrencyRupee className="text-2xl mt-0.5" />
              <b className="pl-2 ">
                {resDetails[0]?.card?.card?.info?.costForTwoMessage}
              </b>
            </span>
          </div>
        </section>

        <section className="pt-5 pb-3 flex overflow-y-hidden w-inherit gap-x-4">
          {resDetails[1]?.card?.card?.gridElements?.infoWithStyle?.offers?.map(
            (item) => (
              <Coupon key={item?.info?.offerIds[0]} {...item} />
            )
          )}
        </section>

        <section>
        <div className="border-b pt-8 pb-5 border-b-gray-300">
            <span className="pr-2  font-bold text-sm text-gray-700">
              Veg Only
            </span>{" "}
            <input
              type="checkbox"
              className="checked:bg-green-700 default:ring-2 ..."
            />
          </div>
          {memoizedMenuContent}
        </section>
      </main>
       { cartItems.length > 0 && <FloatingMenu /> }
    </div>
  ) : null;
};

export default Restaurant;
