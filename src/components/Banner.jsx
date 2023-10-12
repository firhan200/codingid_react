import { Box, Grid, Typography } from "@mui/material";
import BannerStatistic from "./BannerStatistic";
import bg from '/images/bg.png'

export default function Banner() {
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                color: "#fff",
                textAlign: "center",
                paddingY: 20,

            }}>
                <Typography marginBottom={4} variant="h4">We provide driving lessons for various types of cars</Typography>
                <Typography variant="h6">Professional staff who are ready to help you to become a much-needed reliable driver</Typography>
                <Grid container marginTop={10}>
                    <BannerStatistic 
                        title="50+" 
                        subTitle="A class ready to make you a reliable driver"/>
                    <BannerStatistic title="100+" subTitle="ini deskripsi perubahan nya"/>
                    <BannerStatistic title="200+" subTitle="Lorem ipsum dolor sir amet"/>
                </Grid>
            </Box>

            <Box marginY={6}>
                <Typography textAlign="center" variant="h4" color="primary">Join us for the course</Typography>
            </Box>
        </>
    )
}