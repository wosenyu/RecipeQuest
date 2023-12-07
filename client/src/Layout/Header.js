import { Typography } from '@mui/material';
import logo from '../Asset/logo.png'
import './Header.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();

    const navigateToEdama = () => {

        navigate('/edamamApi')

    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f8f2' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <img src={logo} alt="RecipeQuest Logo" style={{ maxWidth: '100%', height: 'auto' }} />

                <Typography variant='h1' color="dark">
                    Cook Savor Explore with RecipeQuest
                </Typography>



            </div>
            <Button variant="contained" onClick={navigateToEdama} sx={{ mb: "20px", mt: '20px' }}>
                Search for recipe
            </Button>


        </div>
    )
}