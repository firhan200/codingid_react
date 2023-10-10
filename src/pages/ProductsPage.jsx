import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/Products/ProductCard";
import { Grid, Skeleton, Stack } from "@mui/material";

export default function ProductsPage() {
    //default loading is false
    const [isLoading, setIsLoading] = useState(false)
    //default products is empty array
    const [products, setProducts] = useState([])

    //run once, to get products data
    useEffect(() => {
        //function to get products from API
        async function getProducts() {
            //show loading
            setIsLoading(true)
            //start fetch data
            const res = await axios.get('https://dummyjson.com/products')
            //get response
            const { products } = res.data
            //set products from API to local state
            setProducts(products)
            //hide loading
            setIsLoading(false)
        }

        //call function to get products from API
        getProducts()
    }, [])

    //check if is loading
    if (isLoading) {
        return (
            <Grid container spacing={6}>
                <Grid item xs={6} md={4} lg={3}>
                    <Stack gap={2}>
                        <Skeleton variant="rectangular" height={150} />
                        <Skeleton variant="rectangular" />
                        <Skeleton variant="rectangular" height={50} />
                    </Stack>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <Stack gap={2}>
                        <Skeleton variant="rectangular" height={150} />
                        <Skeleton variant="rectangular" />
                        <Skeleton variant="rectangular" height={50} />
                    </Stack>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <Stack gap={2}>
                        <Skeleton variant="rectangular" height={150} />
                        <Skeleton variant="rectangular" />
                        <Skeleton variant="rectangular" height={50} />
                    </Stack>
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid container spacing={6}>
            {
                products.map((product, key) =>
                    <Grid item xs={6} md={4} lg={3} key={key}>
                        <ProductCard product={product} />
                    </Grid>
                )
            }
        </Grid>
    )
}