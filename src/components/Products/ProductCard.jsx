/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';

export default function ProductCard({ product }) {
    return (
        <Card>
            <CardMedia
                sx={{ height: 140 }}
                image={product.thumbnail}
                title={product.title}
            />
            <CardContent>
                <Rating value={product.rating}/>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/products/${product.id}`} preventScrollReset={true}>
                    <Button size="small">Learn More</Button>
                </Link>
            </CardActions>
        </Card>
    );
}