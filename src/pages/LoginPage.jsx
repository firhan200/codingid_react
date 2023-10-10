import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <Container maxWidth="md" sx={{
            marginTop: 5
        }}>
            <Typography variant="h4">Login Page</Typography>
            <Stack gap={4} marginTop={5}>
                <TextField label="email" />
                <TextField label="password" />
            </Stack>
            <Box textAlign="end" marginTop={5}>
                <Button variant="contained">Login</Button>
            </Box>
            <Box>
                <Typography>Dont have account? <Link to="/register">Go To Register </Link></Typography>
            </Box>
        </Container>
    )
}