import React from 'react'
import {SlEqualizer} from "react-icons/sl";

const FixedHeader = () => {
  return (
    <div className="sticky top-0 flex justify-between px-12 pt-9 bg-white z-10">
          <h2 className="text-[27px] text-gray-700 font-bold">
            324 restaurants
          </h2>
          <ol className="flex text-[1rem] text-gray-500 pt-4 gap-9">
            <li className="hover:text-gray-800 cursor-pointer border-b-2 pb-4 border-gray-700">Relevance</li>
            <li className="hover:text-gray-800 cursor-pointer">Delivery Time</li>
            <li className="hover:text-gray-800 cursor-pointer">Rating</li>
            <li className="hover:text-gray-800 cursor-pointer">Cost: Low to High</li>
            <li className="hover:text-gray-800 cursor-pointer">Cost: High to Low</li>
            <li className="hover:text-orange-500 cursor-pointer flex gap-2 font-semibold">
              Filters 
            <div className="border-amber-600 border-2 rounded-full p-1 h-fit">
            <SlEqualizer className="text-orange-500 border-orange-500"/>
              </div>
            </li>
          </ol>
        </div>
  )
}

export default FixedHeader