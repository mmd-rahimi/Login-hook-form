import { useContext } from "react";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router";
import { CartContext } from "../Contexts/CartContext";

export const Product = ({ product }) => {

  const {addToCart} = useContext(CartContext)
  // console.log(product);

  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] rounded-xl h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/*image*/}
          <div className="w-[200px] flex mx-auto justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            />
          </div>
        </div>
        {/*buttons*/}
        <div onClick={() => addToCart(product, id)} className=" absolute top-6 right-11 group-hover:right-5  p-2 flex-col flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button>
            <div className="rounded flex justify-center items-center text-white w-12 h-12 bg-blue-950">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="rounded w-12 h-12 bg-white flex justify-center items-center text-blue-950 drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/*category title price*/}
      <div className="font-thin text-sm">{category}</div>

      <Link to={`/product/${id}`}>
        <h2 className="font-medium text-base">{title}</h2>
      </Link>
      <h2 className="font-medium text-base">{price} $</h2>
    </div>
  );
};
