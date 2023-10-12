/* eslint-disable react/prop-types */
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductCard({ data, maxText = 10 }) {
    const { id, title, thumbnail, description } = data

    const cutText = (text) => {
        if(text < maxText){
            return text
        }

        const cuttedText = text.slice(0, maxText)
        return cuttedText+'...'
    }

    return (
        <Card sx={{ maxWidth: 345, minHeight: 400 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={thumbnail}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {cutText(description)}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/product_detail/${id}`}>
                    <Button size="small">Learn More</Button>
                </Link>
            </CardActions>
        </Card>
    )
}