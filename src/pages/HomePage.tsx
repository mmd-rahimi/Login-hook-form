import { useContext } from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { ProductCards } from "../components/ProductCards";
import { ProductContext } from "../Contexts/ProductContext";

export const HomePage = () => {
  const  { products } = useContext(ProductContext);
  console.log(products);
  
  return (
    <>
      <Header />
      <Navbar />
      <ProductCards />
    </>
  );
};
