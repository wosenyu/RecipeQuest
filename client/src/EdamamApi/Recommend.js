import React from "react"
import { useState } from "react"
import axios from "axios"
import { TextField, Typography, IconButton, Button, Avatar, Stack, Divider, Grid } from '@mui/material';
import Navbar from "../Components/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import RecipeList from '../Components/RecipeList';
import Logo from '../Asset/logo.png'
import Dimsum from '../Asset/dipsums.png'
import Ramen from '../Asset/ramen.png'
import Krfood from '../Asset/krfood.png'
import Pasta from '../Asset/pasta.png'
import Taco from '../Asset/taco.png'
import Burger from '../Asset/burger.png'
import Creme from '../Asset/creme.png'
export default function Recommend() {

    const [recipes, setRecipes] = useState([])
    // const [searchQuery, setSearchQuery] = useState('')


    const handleSearch = (cuisine) => {

        let searchQuery = cuisine;
        axios.get(`http://localhost:3001/api/edamam-recipes?q=${searchQuery}&from=0&to=4`)
            .then((response) => {
                const data = response.data.hits;
                console.log(data); // Log the data received from the API
                setRecipes(data);
                console.log(recipes); // Log the state after updating
            })
            .catch((error) => console.error(error));

    };

    return (
        <div className="App">
            <Navbar />

            <h1>Recipes (Top 10)</h1>


            <Stack
                direction="row"
                spacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent='center'
                alignItems="center"
                flexWrap={{ xs: 'wrap', sm: 'nowrap' }}
                sx={{ mb: '20px' }}
            >
                <Button
                    variant="contained"
                    color="bar"
                    startIcon={<Avatar src={Dimsum} />}
                    onClick={() => handleSearch('chinese')}
                >
                    Chinese
                </Button>
                <Button
                    variant="contained"
                    color="bar"
                    startIcon={<Avatar src={Ramen} />}
                    onClick={() => handleSearch('japanese')}

                >
                    Japanese
                </Button>
                <Button
                    variant="contained"
                    color="bar"
                    startIcon={<Avatar src={Krfood} />}
                    onClick={() => handleSearch('Korean')}
                >
                    Korean
                </Button>
                <Button
                    variant="contained"
                    color="bar"
                    startIcon={<Avatar src={Pasta} />}
                    onClick={() => handleSearch('italian')}
                >
                    Italian
                </Button>
                <Button
                    variant="contained"
                    color="bar"
                    startIcon={<Avatar src={Taco} />}
                    onClick={() => handleSearch('mexican')}
                >
                    Mexican
                </Button>
                <Button
                    variant="contained"
                    color="bar"
                    startIcon={<Avatar src={Burger} />}
                    onClick={() => handleSearch('american')}
                >
                    American
                </Button>
                <Button
                    variant="contained"
                    color="bar"
                    startIcon={<Avatar src={Creme} />}
                    onClick={() => handleSearch('french')}
                >
                    French
                </Button>
            </Stack>
            <Divider />
            {recipes && recipes.length > 0 ? (
                <RecipeList recipes={recipes} />
            ) : (
                <p>No recipes found.</p>
            )}
        </div>
    )
}