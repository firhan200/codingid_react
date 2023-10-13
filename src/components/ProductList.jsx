import { Container, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        //function ini akan
        //1. get data dari server
        //2. set data nya ke local state (products)
        async function getProducts() {
            const res = await axios.get('https://dummyjson.com/products') //kita tungguin sampe dapet datanya
            setProducts(res.data.products)
        }

        getProducts()
    }, [])

    return (
        <Container>
            <Typography variant="h1">Product List Here</Typography>
            <Grid container spacing={4}>
                {products.map(product => (
                    <Grid item key={product.id} xs={6} md={4} lg={3}>
                        <ProductCard maxText={70} data={product}/>
                    </Grid>
                ))}
            </Grid>

            {/* <Stack gap={4} direction="row">
                {products.map(product => (
                    <ProductCard key={product.id} maxText={50} data={product} />
                ))}
            </Stack> */}
        </Container>
    )
}