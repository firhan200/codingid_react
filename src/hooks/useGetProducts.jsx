import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetProducts() {
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

    return {
        loading,
        products
    }
}