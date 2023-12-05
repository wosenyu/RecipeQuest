import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/navbar';
import { TextField, Typography, IconButton, Button, CircularProgress } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import RecipeList from '../Components/RecipeList';




export default function EdamamApi() {

    const [edamamRecipes, setEdamamRecipes] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    // const handleSearch = () => {
    //     // Fetch data from the Edamam API with the search query
    //     axios.get(`https://recipe-quest-backend-17dg9ai0s-wosenyu.vercel.app/api/edamam-recipes?q=${searchQuery}&from=0&to=4`)
    //         .then((response) => {
    //             const data = response.data.hits;
    //             console.log(data); // Log the data received from the API
    //             setEdamamRecipes(data);
    //             console.log(edamamRecipes); // Log the state after updating
    //         })
    //         .catch((error) => console.error(error));
    // };

    const handleSearch = () => {
        setLoading(true); // Start loading

        axios
            .get(`https://recipe-quest-backend-17dg9ai0s-wosenyu.vercel.app/api/edamam-recipes?q=${searchQuery}&from=0&to=4`, {
                onDownloadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent;

                    // Calculate percentage progress
                    const percentCompleted = Math.round((loaded * 100) / total);
                    setProgress(percentCompleted); // Update progress state
                },
            })
            .then((response) => {
                const data = response.data.hits;
                setEdamamRecipes(data);
            })
            .catch((error) => console.error(error))
            .finally(() => {
                setLoading(false); // Turn off loading when finished
                setProgress(0); // Reset progress
            });
    };

    return (
        <div>
            <div className="App">
                <Navbar />

                <h1>Recipes (Top 10)</h1>
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

                {loading && <CircularProgress value={progress} max="100">{progress}%</CircularProgress>}
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
                    <p></p>
                )}

            </div>

        </div>
    )
}
