import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography } from "@mui/material";

export default function MaterialPage() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{
                    backgroundColor: "white"
                }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Button variant="" color="primary">Login</Button>
                        <Button>Register</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} style={{
                    backgroundColor: 'yellow'
                }}>
                    test
                </Grid>
                <Grid item xs={12} lg={6} style={{
                    backgroundColor: 'red'
                }}>
                    test
                </Grid>
                {/* <Grid item xs={12} md={6} lg={4} style={{
                    backgroundColor: 'red'
                }}>
                    test
                </Grid>
                <Grid item xs={12} md={6} lg={4} style={{
                    backgroundColor: 'blue'
                }}>
                    test
                </Grid> */}
            </Grid>
        </div>
    )
}