import { Button, Container, Grid, Rating, Stack, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@emotion/react";

export default function DetailProductPage(){
    const theme = useTheme()
    const dekstop = useMediaQuery(theme.breakpoints.up('lg'))

    //destructure
    const { productId } = useParams()

    const [productDetail, setProductDetail] = useState(null)

    useEffect(() => {
        async function getProductDetail(){
            const res = await axios.get(`https://dummyjson.com/products/${productId}`)
            setProductDetail(res.data)
        }

        getProductDetail()
    }, [])

    if(productDetail == null){
        return ''
    }

    console.log(productDetail)

    return (
        <Container sx={{
            marginY: 10
        }}>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                    <img src={productDetail.thumbnail} width="100%"/>
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                    { dekstop ? 'On Dekstop' : 'Not Dekstop' }
                    <Typography variant={ dekstop ? 'h1' : 'h5' }>{ productDetail.title }</Typography>
                    <Typography>{ productDetail.description }</Typography>
                    <Typography color="primary" variant="h4" marginTop={4}>${ productDetail.price }</Typography>
                    <Stack direction="row" gap={4} marginTop={4}>
                        <Button variant="outlined">Add to Cart</Button>
                        <Button variant="contained">Buy Now</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}