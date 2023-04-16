import {RxCaretDown, RxCaretUp} from "react-icons/rx"

const Recommended=()=>{
    return(<>
     <div className="border-b pt-8 pb-5 border-b-gray-300">
            <span className="pr-2  font-bold text-sm text-gray-700">
              Veg Only
            </span>{" "}
            <input
              type="checkbox"
              className="checked:bg-green-700 default:ring-2 ..."
            />
          </div>
          <div className="pt-6 pb-5">
            <div className="flex justify-between">
            <span className="pr-2  font-bold text-lg text-gray-700">
              Recommended (50) 
            </span>
           <RxCaretUp className="text-3xl"/>
            </div>
         
            <div className="flex justify-between pt-5 border-b">
              <span>
                <div className="border-2 p-0.5 border-green-700 w-fit">
                  <div className="bg-green-700 w-2 h-2 rounded"></div>
                </div>
                <h2 className="text-gray-700 font-semibold pt-1">
                  Paneer Chilly Dry (500 Ml)
                </h2>
                <p className="text-sm pt-0.5">₹290</p>
              </span>
              <button className="relative pb-4">
                <img
                  alt="Paneer Chilly Dry (500 Ml)"
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wjgtlqegl5vz882ksiqe"
                  className="h-[95px] rounded-lg"
                  loading="lazy"
                />
                <div className="border-2 relative bottom-6 left-4 bg-white rounded-lg p-1 w-24">
                  <span className="text-green-700 font-semibold">Add</span>
                </div>
              </button>
            </div>
            <div className="flex justify-between pt-5 border-b">
              <span>
                <div className="border-2 p-0.5 border-green-700 w-fit">
                  <div className="bg-green-700 w-2 h-2 rounded"></div>
                </div>
                <h2 className="text-gray-700 font-semibold pt-1">
                  Paneer Chilly Dry (500 Ml)
                </h2>
                <p className="text-sm pt-0.5">₹290</p>
              </span>
              <button className="relative pb-4">
                <img
                  alt="Paneer Chilly Dry (500 Ml)"
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wjgtlqegl5vz882ksiqe"
                  className="h-[95px] rounded-lg"
                  loading="lazy"
                />
                <div className="border-2 relative bottom-6 left-4 bg-white rounded-lg p-1 w-24">
                  <span className="text-green-700 font-semibold">Add</span>
                </div>
              </button>
            </div>
          </div>
    </>)
}

export default Recommended;