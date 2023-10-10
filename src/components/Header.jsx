import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import './Header.css'
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        React Routing Tutorial
                    </Typography>
                    <NavLink to="/login" className={({ isActive }) => {
                        return isActive ? "iniaktifyaa" : ""
                    }}>
                        <Button sx={{
                            color: "white"
                        }}>Login</Button>
                    </NavLink>
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <Button sx={{
                            color: "white"
                        }}>Register</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    )
}