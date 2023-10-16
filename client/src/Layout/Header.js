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
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h1' color="dark" onClick={() => navigateToEdama()} >Cook Savor Explore with RecipeQuest <br /> <Button variant="contained">
                    Search for  recipe
                </Button>
                </Typography>

                <img src={logo} alt="RecipeQuest Logo"></img>

            </div>

        </div>
    )
}