import axios from "axios";
import { createContext, FC, ReactNode, useEffect, useState } from "react";

interface Product {
  product: {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
    description?: string;
  };
}

interface ProductContextType {
  products: Product[];
}

export interface ProductProviderProps {
  children: ReactNode;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider : FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        const data = response.data;
        // console.log(data);
        setProducts(data);
      });
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
