/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const ProductsContext = createContext(null)

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    return <ProductsContext.Provider value={{
        products,
        setProducts
    }}>{ children }</ProductsContext.Provider>
}

export default function useProducts(){
    const productContext = useContext(ProductsContext)

    return productContext
}