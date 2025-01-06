import { useContext } from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { ProductCards } from "../components/ProductCards";
import { ProductContext } from "../Contexts/ProductContext";

export const HomePage = () => {
  const { products } = useContext(ProductContext);
  console.log(products);

//   const filteredProducts = products.filter((item) => {
//     return (
//       item.category === "men's clothing" || item.category === "women's clothing"
//     );
//   });
// console.log(filteredProducts);

  return (
    <>
      <Header />
      <Navbar />
      <ProductCards />
    </>
  );
};
