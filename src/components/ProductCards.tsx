import { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";
import { Product } from "./Product";

export const ProductCards = () => {
  const { products } = useContext(ProductContext);
  // console.log(products);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  // console.log(filteredProducts);

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
        {filteredProducts.map((product) => {
         return <Product product={product} key={product.id} />
        })}
        </div>
      </div>
    </div>
  );
};
