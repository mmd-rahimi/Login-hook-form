import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {

    const [products, setPrpducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json();
            console.log(data)
        };
        fetchProducts();
    }, [])

    return <ProductContext.Provider>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider;