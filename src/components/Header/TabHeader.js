import React, { useState, useEffect, useRef } from "react";
import { SlEqualizer } from "react-icons/sl";
import { FaCaretDown } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const TabHeader = ({ filterRestaurants, filters, resetFilters }) => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActivetab] = useState(searchParams.get("SortBy"));
  const headerRef = useRef(null);

  // useEffect(() => {
  //   console.log("calledddd");
  //   if (!searchParams?.get("SortBy")) {
  //     setActivetab("RELEVANCE");
  //   } else {
  //     headerRef.current.scrollIntoView({ behavior: "smooth" });
  //     setActivetab(searchParams?.get("SortBy"));
  //   }
  // }, [searchParams]);

  return (
    <>
      <h2 className="text-[24px] text-black-700 font-bold mt-5 mx-[11rem]">
        Restaurants with online food delivery in Kanpur
      </h2>

      <div
        className="sticky top-0 bg-white z-10 gap-y-2 pt-5 pb-5 mx-40 pl-3"
        ref={headerRef}
      >
        <ol className="flex text-[1rem] font-semibold text-gray-600 gap-3">
          {filters?.length > 0 ? (
            <li
              className="cursor-pointer flex gap-2 border rounded-full pl-3 pr-2 pt-1 bg-gray-200 border-black"
              onClick={resetFilters}
            >
              <span className="bg-orange-600 text-white pl-2 pt-0.5 pr-2 mb-2 mt-1 text-xs rounded-full">
                {filters.length}
              </span>{" "}
              Filter
              <span className="rounded-full p-1 h-fit">
                <SlEqualizer className="text-gray-500 border-gray-500" />
              </span>
            </li>
          ) : (
            <li className="cursor-pointer flex gap-2 border rounded-full pl-3  pr-2 pt-1 pb-2">
              Filter
              <span className="rounded-full p-1 h-fit">
                <SlEqualizer className="text-gray-500 border-gray -500" />
              </span>
            </li>
          )}

          <li className="cursor-pointer flex gap-2 border rounded-full pl-3  pr-2 pt-1 pb-2">
            Sort By
            <span className="rounded-full p-1 h-fit">
              <FaCaretDown className="text-gray-500 border-gray -500" />
            </span>
          </li>
          <li className="cursor-pointer flex gap-2 border rounded-full pl-3  pr-2 pt-1 pb-2">
            <button onClick={() => filterRestaurants("FastDelivery")}>
              Fast Delivery
            </button>
          </li>
          <li className="cursor-pointer flex gap-2 border rounded-full pl-3  pr-2 pt-1 pb-2">
            <button onClick={() => filterRestaurants("NewOnSwiggy")}>
              New On Swiggy
            </button>
          </li>
          <li className="cursor-pointer flex gap-2 border rounded-full pl-3  pr-2 pt-1 pb-2">
            <button onClick={() => filterRestaurants("4+Ratings")}>
              Ratings 4.0+
            </button>
          </li>
          <li className="cursor-pointer flex gap-2 border rounded-full pl-3  pr-2 pt-1 pb-2">
            <button onClick={() => filterRestaurants("Veg")}>Pure Veg</button>
          </li>
          <li className="cursor-pointer flex gap-2 border rounded-full pl-3  pr-2 pt-1 pb-2">
            <button onClick={() => filterRestaurants("Offers")}>Offers</button>
          </li>
          <li className="cursor-pointer flex gap-2 border rounded-full pl-3  pr-2 pt-1 pb-2">
            <button onClick={() => filterRestaurants("300-600")}>
              Rs.300-Rs. 600
            </button>
          </li>
          <li className="cursor-pointer flex gap-2 border rounded-full pl-3  pr-2 pt-1 pb-2">
            <button onClick={() => filterRestaurants("LessThan300")}>
              Less than Rs. 300{" "}
            </button>
          </li>
        </ol>
      </div>
    </>
  );
};

export default TabHeader;
