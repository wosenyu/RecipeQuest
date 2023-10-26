import React from "react"
import { useState } from "react"
import axios from "axios"
import { TextField, Typography, IconButton, Button } from '@mui/material';
import Navbar from "../Components/navbar";
import SearchIcon from "@mui/icons-material/Search";
import RecipeList from '../Components/RecipeList';


export default function Ingredient() {

    const [recipes, setRecipes] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = () => {

        const formattedIngredients = searchQuery.replace(/\s/g, '+');

        const apiUrl = `https://recipe-quest-backend-17dg9ai0s-wosenyu.vercel.app/api/ingredient?q=${formattedIngredients}&from=0&to=5`;

        axios.get(apiUrl)
            .then((response) => {
                const data = response.data.hits;
                setRecipes(data);
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="App">
            <Navbar />

            <h1>Recipes (Top 10)</h1>
            <div>

                <TextField
                    id="outlined-multiline-static"
                    label="Enter Ingredients"
                    multiline
                    rows={4}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}

                />
                <IconButton onClick={handleSearch}><SearchIcon color="secondary" fontSize="large" /></IconButton>

            </div>

            {recipes && recipes.length > 0 ? (
                <RecipeList recipes={recipes} />
            ) : (
                <p>No recipes found.</p>
            )}
        </div>
    )
}
