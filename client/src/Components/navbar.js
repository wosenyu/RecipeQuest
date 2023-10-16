import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../Asset/logo.png';

export default function navbar() {

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
        <AppBar position="sticky" elevation={0} sx={{ bgcolor: '#f9f8f2' }}>

            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '60%', margin: '0 auto' }}>
                <Box>
                    <a href='/'><img src={logo} alt="recipequest" height="120" /></a>

                </Box>
                <Box>
                    <Button variant="outlined" sx={{ paddingY: '8px', paddingX: '24px', ':hover': { bgcolor: '#bb9457' } }}>
                        Sign Up
                    </Button>
                    <Button variant="contained" color="secondary" sx={{ paddingY: '8px', paddingX: '24px', marginLeft: 2, ':hover': { bgcolor: '#432818' } }}>
                        Log In
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );

}