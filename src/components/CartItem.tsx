import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router";

export const CartItem = ({ item }) => {
  const { id, title, image, amount, price } = item;
  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/*image*/}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        {/*title & remove icon*/}
        <div className="w-full flex flex-col">
          {/*title*/}
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm font-medium uppercase max-w-[240px] text-blue-950 hover:underline"
            >
              {title}
            </Link>
            {/*remove icon*/}
            <div className="text-xl cursor-pointer">
              <IoMdClose className="text-blue-700 hover:text-blue-950 transition" />
            </div>
          </div>
        </div>
        <div>
          {/*quantity*/}
          <div className="flex flex-1 max-w-[100px] bg-blue-300 items-center h-full border text-blue-950 font-medium">
            {/* - icon */}
            <div className="felx-1">
              <IoMdRemove />
            </div>
            {/*amount*/}
            <div>{amount}</div>
            {/* + icon */}
            <div>
              <IoMdAdd />
            </div>
          </div>
          {/*item price*/}
          <div>price</div>
          {/*final price*/}
          <div>final price</div>
        </div>
      </div>
    </div>
  );
};
