import React, {useState, useEffect, useRef} from "react";
import { SlEqualizer } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const TabHeader = () => {
  const [searchParams]=useSearchParams();
  const [activeTab, setActivetab]=useState(searchParams.get("SortBy"))

  const headerRef=useRef(null);

  useEffect(()=>{
    if(!searchParams.get("SortBy")){
      setActivetab("RELEVANCE")
    }else{
      headerRef.current.scrollIntoView({ behavior: 'smooth' })
      setActivetab(searchParams.get("SortBy"))
    }
  },[searchParams])

  console.log("Tab Header")

  return (
    <div className="sticky top-0 flex justify-between px-12 pt-9 bg-white z-10" ref={headerRef}>
      <h2 className="text-[27px] text-gray-700 font-bold">324 restaurants</h2>
      <ol className="flex text-[1rem] text-gray-600 pt-1 gap-9">
        <li className={activeTab==="RELEVANCE" ? "hover:text-gray-800 cursor-pointer active-tab" : "hover:text-gray-800 cursor-pointer"}>
          <Link to="?SortBy=RELEVANCE">Relevance</Link>
        </li>
        <li className={activeTab==="DELIVERY_TIME" ? "hover:text-gray-800 cursor-pointer active-tab" : "hover:text-gray-800 cursor-pointer"}>
        <Link to="?SortBy=DELIVERY_TIME">Delivery Time</Link></li>
        <li className={activeTab==="RATING" ? "hover:text-gray-800 cursor-pointer active-tab" : "hover:text-gray-800 cursor-pointer"}><Link to="?SortBy=RATING">Rating</Link></li>
        <li className={activeTab==="COST_FOR_TWO" ? "hover:text-gray-800 cursor-pointer active-tab" : "hover:text-gray-800 cursor-pointer"}>
        <Link to="?SortBy=COST_FOR_TWO">Cost: Low to High</Link>
        </li>
        <li className={activeTab==="COST_FOR_TWO_H2L" ? "hover:text-gray-800 cursor-pointer active-tab" : "hover:text-gray-800 cursor-pointer"}>
        <Link to="?SortBy=COST_FOR_TWO_H2L">Cost: High to Low</Link>
        </li>
        <li className="hover:text-orange-500 cursor-pointer flex gap-2 font-semibold">
          Filters
          <div className="border-amber-600 border-2 rounded-full p-1 h-fit">
            <SlEqualizer className="text-orange-500 border-orange-500" />
          </div>
        </li>
      </ol>
    </div>
  );
};

export default TabHeader;
