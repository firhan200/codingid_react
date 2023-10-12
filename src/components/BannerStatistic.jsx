/* eslint-disable react/prop-types */
import { Grid, Typography } from "@mui/material";

//props = { title: "test", subTitle: "description here" }
//langsung aja panggil title dan subTitle nya
export default function BannerStatistic({ title, subTitle }) {
    return (
        <Grid item xs={12} md={4}>
            <Typography variant="h2">{ title }</Typography>
            <Typography variant="p">{ subTitle }</Typography>
        </Grid>
    )
}