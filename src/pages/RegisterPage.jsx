import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";

export default function RegisterPage() {
    return (
        <Box marginY={6}>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={6} lg={6} xl={4} overflow={3}>
                    <Typography variant="h4">Register Page</Typography>
                    <Stack gap={4} marginTop={5}>
                        <TextField label="name" />
                        <TextField label="email" />
                        <TextField label="password" />
                    </Stack>
                    <Box textAlign="end" marginTop={5}>
                        <Button variant="contained">Register</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}