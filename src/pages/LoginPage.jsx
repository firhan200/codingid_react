import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <Container>
            <Typography variant="h4">Login Page</Typography>
            <Grid container spacing={4}>
                <Grid xs={12} md={6} item>
                    <TextField label="email" fullWidth={true}/>
                </Grid>
                <Grid xs={12} md={6} item>
                    <TextField label="password" fullWidth={true}/>
                </Grid>
            </Grid>
            <Box textAlign="end" marginTop={5}>
                <Button variant="contained" color="primary">Login</Button>
                <Button variant="outlined" color="primary">Forgot Password</Button>
            </Box>
            <Box>
                <Typography>Dont have account? <Link to="/register">Go To Register </Link></Typography>
            </Box>
        </Container>
    )
}