/* eslint-disable react/prop-types */
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductCard({ data, maxText = 10 }) {
    const { id, title, thumbnail, description } = data

    const cutText = (text) => {
        //check apakah text kurang dari maksimum panjang (50)
        if (text.length < maxText) {
            return text //ga pake ...
        }

        //panjang text lebih atau sama dengan 50
        const cuttedText = text.slice(0, maxText) //potong text hanya ambil 50 pertama
        return cuttedText + '...' //hasil teks nya...
    }

    // return (
    //     <Card sx={{ maxWidth: 345 }}>
    //         <CardMedia
    //             sx={{ height: 140 }}
    //             image={thumbnail}
    //             title={title}
    //         />
    //         <CardContent>
    //             <Typography gutterBottom variant="h5" component="div">
    //                 {title}
    //             </Typography>
    //             <Typography variant="body2" color="text.secondary">
    //                 {cutText(description)}
    //             </Typography>
    //         </CardContent>
    //         <CardActions >
    //             <Link to={`/product_detail/${id}`}>
    //                 <Button size="small" variant="outlined">Learn More</Button>
    //             </Link>
    //         </CardActions>
    //     </Card>
    // )

    return (
        <Card sx={{ maxWidth: 345, height: '400px' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={thumbnail}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{
                    height: '55px'
                }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                    height: '45px'
                }}>
                    {cutText(description)}
                </Typography>
            </CardContent>
            <CardActions >
                <Box sx={{
                    marginTop: '40px'
                }}>
                    <Link to={`/product_detail/${id}`}>
                        <Button size="small" variant="outlined">Learn More</Button>
                    </Link>
                </Box>
            </CardActions>
        </Card>
    )
}