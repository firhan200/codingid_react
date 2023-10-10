import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";

export default function RegisterPage(){
    return (
        <Container maxWidth="md" sx={{
            marginTop: 5
        }}>
            <Typography variant="h4">Register Page</Typography>
            <Stack gap={4} marginTop={5}>
                <TextField label="name" />
                <TextField label="email" />
                <TextField label="password" />
            </Stack>
            <Box textAlign="end" marginTop={5}>
                <Button variant="contained">Register</Button>
            </Box>
        </Container>
    )
}