import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../slices/cartSlice";

const Menu = (props) => {
  const [collapse, setCollapse] = useState(false);
  const dispatch = useDispatch();
  const { card } = props;
  console.log(card, "recommended");

  return (
    <>
      <div className="pt-6 pb-5">
        <div
          className="flex justify-between hover:cursor-pointer"
          onClick={() => {
            setCollapse(!collapse);
          }}
        >
          <span className="pr-2  font-bold text-lg text-gray-700">
            {card?.card?.title} (
            {card?.card?.itemCards?.length > 0
              ? card?.card?.itemCards?.length
              : 0}
            )
          </span>
          {collapse ? (
            <RxCaretUp className="text-3xl" />
          ) : (
            <RxCaretDown className="text-3xl" />
          )}
        </div>
        {!collapse
          ? card?.card?.itemCards?.map((item) => (
              <div key={item?.card.info?.id} className="flex justify-between pt-5 border-b">
                <span>
                  <div className="border-2 p-0.5 border-green-700 w-fit">
                    <div className="bg-green-700 w-2 h-2 rounded"></div>
                  </div>
                  <h2 className="text-gray-700 font-semibold pt-1">
                    {item?.card?.info?.name}
                  </h2>
                  <p className="text-sm pt-0.5">{`₹${
                    item?.card?.info?.price / 100
                  }`}</p>
                </span>
                <button
                  className="relative pb-4"
                  onClick={() => dispatch(addItem(item))}
                >
                  <img
                    alt="Image not available"
                    width="125px"
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.card?.info?.imageId}`}
                    className="h-[95px] rounded-lg"
                    loading="lazy"
                  />
                  <div className="border-2 relative bottom-6 left-4 bg-white rounded-lg p-1 w-24">
                    <span className="text-green-700 font-semibold">Add</span>
                  </div>
                </button>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Menu;
