import { Box, Grid, Rating, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
    const { id } = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState(null)

    useEffect(() => {
        async function getProduct(id) {
            setIsLoading(true)
            const res = await axios.get(`https://dummyjson.com/products/${id}`)
            const data = res.data
            setProduct(data)
            setIsLoading(false)
        }

        getProduct(id)
    }, [id])

    if (isLoading) {
        return <Box>Loading...</Box>
    }

    if (product === null) {
        return <Typography>Product not found</Typography>
    }

    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <img src={product.thumbnail} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h5">{product.title}</Typography>
                <Rating value={product.rating}/>
                <Typography variant="body1">{ product.description }</Typography>
                <Box marginTop={4}>
                    <Typography variant="h4">${ product.price }</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}