import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Box, Typography, Container, Link } from '@mui/material';
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.


export default function Footer() {
    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '30vh',

            }}
        >
            <CssBaseline />

            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    bgcolor: '#dda15e'

                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" color="primary" gutterBottom>
                                About Us
                            </Typography>
                            <Typography variant="body2" color="primary">
                                We are XYZ company, dedicated to providing the best service to our
                                customers.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" color="primary" gutterBottom>
                                Contact Us
                            </Typography>
                            <Typography variant="body2" color="primary">
                                123 Main Street, Anytown, USA
                            </Typography>
                            <Typography variant="body2" color="primary">
                                Email: info@example.com
                            </Typography>
                            <Typography variant="body2" color="primary">
                                Phone: +1 234 567 8901
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" color="primary" gutterBottom>
                                Follow Us
                            </Typography>
                            <Link href="https://www.facebook.com/" color="inherit">
                                <Facebook />
                            </Link>
                            <Link
                                href="https://www.instagram.com/"
                                color="inherit"
                                sx={{ pl: 1, pr: 1 }}
                            >
                                <Instagram />
                            </Link>
                            <Link href="https://www.twitter.com/" color="inherit">
                                <Twitter />
                            </Link>
                        </Grid>
                    </Grid>
                    <Box mt={5}>
                        <Typography variant="body2" color="primary" align="center">
                            {"Copyright © "}
                            <Link color="inherit" href="https://your-website.com/">
                                Your Website
                            </Link>{" "}
                            {new Date().getFullYear()}
                            {"."}
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>

    );
}