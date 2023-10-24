import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Drawer, IconButton } from '@mui/material';
import logo from '../Asset/logo.png';
import { useNavigate } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from '@mui/icons-material/Menu';
export default function Navbar() {
    const navigate = useNavigate();

    const navigateToHome = () => {

        navigate('/')

    };

    const navigateToSignUp = () => {

        navigate('/signup')

    };

    const navigateToSignIn = () => {

        navigate('/signin')

    };
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setDrawerOpen(open);
    };
    return (

        <>
            <AppBar position="sticky" elevation={0} sx={{ bgcolor: '#f9f8f2' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '60%', margin: '0 auto' }}>
                    <Box>
                        <a href='/'><img src={logo} alt="recipequest" height="120" /></a>
                    </Box>
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <IconButton onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Button variant="outlined" sx={{ paddingY: '8px', paddingX: '24px', ':hover': { bgcolor: '#bb9457' } }} onClick={() => navigateToHome()}>
                            <HomeIcon />
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>

                        <Button variant="outlined" sx={{ paddingY: '8px', paddingX: '24px', ':hover': { bgcolor: '#bb9457' } }} onClick={() => navigateToSignUp()}>
                            Sign Up
                        </Button>
                        <Button variant="contained" color="secondary" sx={{ paddingY: '8px', paddingX: '24px', marginLeft: 2, ':hover': { bgcolor: '#432818' } }} onClick={() => navigateToSignIn()}>
                            Log In
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box>

                    <Button variant="outlined" sx={{ paddingY: '8px', paddingX: '24px', ':hover': { bgcolor: '#bb9457' } }} onClick={() => navigateToHome()}>
                        <HomeIcon />
                    </Button>

                    <Button variant="outlined" sx={{ paddingY: '8px', paddingX: '24px', ':hover': { bgcolor: '#bb9457' } }} onClick={() => navigateToSignUp()}>
                        Sign Up
                    </Button>
                    <Button variant="contained" color="secondary" sx={{ paddingY: '8px', paddingX: '24px', ':hover': { bgcolor: '#432818' } }} onClick={() => navigateToSignIn()}>
                        Log In
                    </Button>
                </Box>
            </Drawer>
        </>
    );

}