import { Box, Container, Grid, Stack, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box sx={{
            backgroundColor: "#F2C94C"
        }}>
            <Container sx={{
                paddingY: 6
            }}>
                <Grid alignContent="center" container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5">Tentang</Typography>
                        <Typography variant="body1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5">Produk</Typography>
                        <Grid container>
                            <Grid xs={6}>Biola</Grid>
                            <Grid xs={6}>Menyanyi</Grid>
                            <Grid xs={6}>Gitar</Grid>
                            <Grid xs={6}>piano</Grid>
                            <Grid xs={6}>Drum</Grid>
                            <Grid xs={6}>Saxophone</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5">Alamat</Typography>
                        <Typography>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</Typography>
                        <Typography variant="h5">Kontak</Typography>
                        <Stack direction="row" gap={2}>
                            {
                                [...Array(6)].map((_, key) => <img key={key} src="https://placehold.co/100" height={40} />)
                            }

                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}