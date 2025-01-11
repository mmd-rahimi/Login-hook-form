import { FC } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router";

interface CartItemProps {
  item: {
    id: number;
    title: string;
    image: string;
    amount: number;
    price: number;
  };
}

export const CartItem: FC<CartItemProps> = ({ item }) => {
  const { id, title, image, amount, price } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 w-full border-b font-light text-gray-400">
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
          <div className="flex">
            {/*quantity*/}
            <div className="flex flex-1 max-w-[100px] items-center h-full text-blue-950 font-medium">
              {/* - icon */}
              <div className="felx-1 flex justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              {/*amount*/}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              {/* + icon */}
              <div className="felx-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            {/*item price*/}
            <div className="flex-1 flex justify-around items-center ">
              $ {price}
            </div>
            {/*final price*/}
            <div className="flex-1 flex justify-center items-center text-blue-950 font-medium">{`$ ${(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
