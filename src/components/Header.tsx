import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { SidebarContext } from "../Contexts/SidebarContext";


export const Header = () => {

const {isOpen, setIsOpen} = useContext(SidebarContext)

  return (
    <div className="flex flex-row justify-around mt-4">
      <div className="w-48 flex justify-center">
        <button className=" hover:scale-150  transition-transform" onClick={ () => setIsOpen(!isOpen)}>
          <CiShoppingCart size={42} />
        </button>
      </div>
      <h1 className="font-bold text-3xl border-b-4 border-black p-2">
        DIGI STYLE
      </h1>
      <input
        className="border-b-2 w-48 p-2 focus:outline-none"
        placeholder="Search..."
        type="search"
      />
    </div>
  );
};
