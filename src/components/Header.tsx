import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-around">
      <div className="w-48 flex justify-center">
        <button
          className=" hover:scale-150  transition-transform"
          onClick={() => {
            navigate("/");
          }}
        >
          <CiShoppingCart size={32} />
        </button>
      </div>
      <h1 className="font-bold text-3xl border-b-4 border-black p-2">
        DIGI STYLE
      </h1>
      <input
        className="border-b-2 w-48 p-2 focus:outline-none"
        placeholder="جستجو..."
        type="search"
      />
    </div>
  );
};
