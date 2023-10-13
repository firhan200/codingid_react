import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"

export default function TypeProducts() {
    const [menus, setMenus] = useState([]) //state []

    useEffect(() => {
        async function getProducts() {
            const res = await axios.get("http://52.237.194.35:2024/api/Menu/GetMenuLimit")
            setMenus(res.data) //update state [{},{},{}]
        }

        getProducts()
    }, [])

    return (
        <Container marginY={4}>
            <Typography textAlign="center" variant="h4" color="primary">Menu Course</Typography>
            <Grid container spacing={4} marginY={4}>
                {
                    //looping state [{},{},{}]
                    menus.map(menu => (
                        <Grid key={menu.id_menu} item xs={6} md={4} lg={3}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={`data:image/png;base64, ${menu.image}`}
                                        alt={menu.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {menu.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {menu.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}