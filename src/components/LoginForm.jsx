import { Box, Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
    //bawaan dari react-router-dom
    //untuk apa? agar kita bisa redirect page/ mengarahkan page ke route yg kita mau
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //ini hanya dummy function untuk mocking api request
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const validateEmail = async () => {
        await delay(1000)
    }

    const login = async () => {
        await delay(1000)
    }

    const submitLogin = async (e) => {
        e.preventDefault()

        console.log("login start")
        setLoading(true)
        await validateEmail()
        await login()
        setLoading(false)
        console.log("login end")

        navigate('/products/1')
    }

    return (
        <Container>
            <form onSubmit={submitLogin}>
                <Typography variant="h4">Login Page</Typography>
                <Grid container spacing={4} marginTop={2}>
                    <Grid xs={12} md={6} item>
                        <TextField disabled={loading} value={email} onChange={e => setEmail(e.target.value)} label="email" fullWidth={true} required />
                    </Grid>
                    <Grid xs={12} md={6} item>
                        <TextField disabled={loading} value={password} onChange={e => setPassword(e.target.value)} type="password" label="password" fullWidth={true} required />
                    </Grid>
                </Grid>
                <Box textAlign="end" marginTop={5}>
                    <Button disabled={loading} type="submit" variant="contained" color="primary">

                        {loading ? <CircularProgress /> : "Submit"}
                    </Button>
                </Box>
            </form>
            <Box>
                <Typography>Dont have account? <Link to="/register">Go To Register </Link></Typography>
            </Box>
        </Container>
    )
}