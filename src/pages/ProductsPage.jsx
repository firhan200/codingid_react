/* eslint-disable react/display-name */
import ProductCard from "../components/Products/ProductCard";
import { Grid, Skeleton, Stack } from "@mui/material";
import useProducts from "../hooks/useProducts";

const ProductsPage = () => {
    const { loading, products } = useProducts()

    //check if is loading
    if (loading) {
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

export default ProductsPage;