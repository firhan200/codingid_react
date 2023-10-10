import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        React Routing Tutorial
                    </Typography>
                    <Link to="/login">
                        <Button sx={{
                            color: "#fff"
                        }}>Login</Button>
                    </Link>
                    <Link to="/register">
                        <Button variant="contained" color="error">Register</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}