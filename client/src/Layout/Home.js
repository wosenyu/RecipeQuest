import RecipeBook from "../Asset/Recipesbook.png"
import Recommend from "../Asset/recommend.png"
import Missing from "../Asset/missing.png"
import { Typography, Button } from '@mui/material';
import Navbar from '../Components/navbar'
import Header from './Header';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const navigateToEdama = () => {

        navigate('/edamamApi')

    };

    return (
        <div>
            <Navbar />
            <Header />

            <div style={{ marginTop: '5em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant='h1' color="dark" >Welcome to RecipeQuest
                </Typography>
            </div>

            <div style={{ marginTop: '5em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginLeft: '20em' }}>
                    <img src={RecipeBook} alt="RecipeBook" style={{ width: '250px', height: 'auto' }}></img>
                </div>
                <Typography variant='body1' color="dark" style={{ marginLeft: '10em' }}>
                    Begin your culinary exploration.<br /> Discover a world of culinary delights <br /> with thousands of recipes at your fingertips.<br /> Add your favorites to your personal recipe book <br />Embark on a delectable journey.<br /> <br />
                    <Button variant="contained" sx={{ paddingY: '8px', paddingX: '24px' }} onClick={() => navigateToEdama()}>
                        Get started today!
                    </Button>
                </Typography>
            </div>

            <div style={{ marginTop: '5em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                <Typography variant='body1' color="dark" style={{ marginLeft: '10em' }}>
                    Feeling unsure about what to have for your meal? <br /> Allow us to assist you by exploring our<br /> extensive collection of recommended recipes.<br /> Discover your perfect culinary choice here.
                </Typography>
                <div style={{ marginLeft: '4em' }}>
                    <img src={Recommend} alt="RecipeBook" style={{ width: '500px', height: 'auto' }}></img>
                </div>
            </div>

            <div style={{ marginTop: '5em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginLeft: '30em' }}>
                    <img src={Missing} alt="Missing Ingredient" style={{ width: '500px', height: 'auto' }}></img>
                </div>
                <Typography variant='body1' color="dark" style={{ marginLeft: '5em' }}>
                    Missing an ingredient? Just enter the ingredients you have <br /> we'll provide you with a tailored recipe based on what you've got in your kitchen. <br /> It's the perfect solution for making a delicious meal without having to run to the store.
                </Typography>
            </div>
        </div>

    )
}