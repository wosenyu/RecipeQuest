import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../Asset/logo.png';



export default function navbar() {

    const pages = ['Products', 'Pricing', 'Blog'];


    return (
        // <AppBar position="static" elevation={0} sx={{ bgcolor: 'white' }}>
        //     <Toolbar>
        //         <img src={logo} alt="my logo" height="100"></img>

        //         <Button variant="contained">Login</Button>
        //         <Button variant="contained">Sign Up</Button>
        //     </Toolbar>
        // </AppBar>
        // <AppBar position="static" elevation={0} sx={{ bgcolor: 'transparent', width: '50%', margin: '0 auto' }}>
        //     <Toolbar>
        //         <Box sx={{ flexGrow: 1 }}> {/* This Box will push the logo to the left */}
        //             <img src={logo} alt="my logo" height="130" />
        //         </Box>
        //         <Box sx={{ display: 'flex', gap: 2, }}>

        //             <Button variant="outlined" sx={{ paddingY: '8px', paddingX: '24px' }}>
        // //                 Sign Up
        // //             </Button>
        // //             <Button variant="contained" color="primary" sx={{ paddingY: '8px', paddingX: '24px', marginLeft: 2 }}>
        // //                 Log In
        // //             </Button>


        //         </Box>
        //     </Toolbar>
        // </AppBar>
        <AppBar position="static" elevation={0} sx={{ bgcolor: 'transparent', width: '60%', margin: '0 auto' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <img src={logo} alt="Airbnb" height="150" /> {/* Adjust the height to make the logo bigger */}
                </Box>
                <Box>
                    <Button variant="outlined" sx={{ paddingY: '8px', paddingX: '24px' }}>
                        Sign Up
                    </Button>
                    <Button variant="contained" color="primary" sx={{ paddingY: '8px', paddingX: '24px', marginLeft: 2 }}>
                        Log In
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );

}