import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router";

export const Product = ({ product }) => {
  console.log(product);

  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
            {/*image*/}
            <div className="w-[200px] flex mx-auto justify-center items-center">
                <img className="max-h-[160px] group-hover:scale-110 transition duration-300" src={image} alt={title} />
            </div>
        </div>
        {/*buttons*/}
        <div className="absolute top-0 right-0 bg-slate-300 p-2">
            <button><div className="flex justify-center items-center text-white w-12 h-12"><BsPlus className="text-3xl"/></div></button>
            <Link to={'/'} className="w-12 h-12 bg-white flex justify-center items-center text-blue-950 drop-shadow-xl"><BsEyeFill /></Link>
        </div>
      </div>
      <div>2</div>
    </div>
  );
};
