import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { ProductCards } from "../components/ProductCards";

export const HomePage = () => {
  return (
    <>
      <Header />
      <ProductCards />
      <Navbar />
    </>
  );
};
