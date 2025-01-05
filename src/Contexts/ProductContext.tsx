import { createContext, useEffect, useState } from "react"

export const ProductContext = createContext();



export const ProductProvider = ({children}) => {

const [Products, setProducts] = useState([])

useEffect(() => {
const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    // console.log(data);
    setProducts(data)
}
fetchProducts();
}, [])

    return <ProductContext.Provider value={{Products}}>
        {children}
    </ProductContext.Provider>
    
}