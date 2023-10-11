/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext(null)

export const ProductsProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            setLoading(true)
            const res = await axios.get('https://dummyjson.com/products')
            setProducts(res.data.products)
            setLoading(false)
        }

        getProducts()
    }, [])

    return <ProductsContext.Provider value={{
        loading,
        products,
    }}>{ children }</ProductsContext.Provider>
}

export default function useProducts(){
    const productContext = useContext(ProductsContext)

    return productContext
}