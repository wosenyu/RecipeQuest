import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/navbar';
import { TextField, Typography, IconButton, Button } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import RecipeList from '../Components/RecipeList';




export default function EdamamApi() {

    const [edamamRecipes, setEdamamRecipes] = useState([])
    const [searchQuery, setSearchQuery] = useState('')


    const handleSearch = () => {
        // Fetch data from the Edamam API with the search query
        axios.get(`http://localhost:3001/api/edamam-recipes?q=${searchQuery}&from=0&to=4`)
            .then((response) => {
                const data = response.data.hits;
                console.log(data); // Log the data received from the API
                setEdamamRecipes(data);
                console.log(edamamRecipes); // Log the state after updating
            })
            .catch((error) => console.error(error));
    };
    return (
        <div>
            <div className="App">
                <Navbar />

                <h1>Edamam Recipes (Top 5)</h1>
                <div>

                    <TextField
                        id="outlined-basic"
                        label="Search for Recipes"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                    />

                    <IconButton onClick={handleSearch}><SearchIcon color="secondary" fontSize="large" /></IconButton>

                </div>
                {/* <ul>
                    {edamamRecipes.map((hit, index) => {
                        const recipe = hit.recipe;
                        return (
                            <li key={index}>
                                <h2>{recipe.label}</h2>
                                <p>Calories: {Math.trunc(recipe.calories)}</p>
                                <p>Instructions:</p>
                                <ol>
                                    {recipe.ingredientLines.map((instruction, i) => (
                                        <li key={i}>{instruction}</li>
                                    ))}
                                </ol>
                                <img src={recipe.image} alt={recipe.label} />
                                <p>
                                    <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                                        See Recipe
                                    </a>
                                </p>

                            </li>
                        );
                    })}
                </ul> */}
                {edamamRecipes && edamamRecipes.length > 0 ? (
                    <RecipeList recipes={edamamRecipes} />
                ) : (
                    <p>No recipes found.</p>
                )}

            </div>
        </div>
    )
}