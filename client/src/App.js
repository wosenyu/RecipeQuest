
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './Components/navbar'
function App() {

  const [recipes, setRecipes] = useState([]);
  const [edamamRecipes, setEdamamRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // useEffect(() => {
  //   // Fetch data from the backend API when the component mounts
  //   axios.get('http://localhost:3001/api/recipes')
  //     .then((response) => setRecipes(response.data))
  //     .catch((error) => console.error(error));
  // }, []);
  // useEffect(() => {
  //   // Fetch data from the backend API when the component mounts
  //   axios.get('http://localhost:3001/api/edamam-recipes')
  //     .then((response) => setEdamamRecipes(response.data.hits)) // Access the "hits" array
  //     .catch((error) => console.error(error));
  // }, []);

  const handleSearch = () => {
    // Fetch data from the Edamam API with the search query
    axios.get(`http://localhost:3001/api/edamam-recipes?q=${searchQuery}&from=0&to=4`)
      .then((response) => setEdamamRecipes(response.data.hits)) // Access the "hits" array
      .catch((error) => console.error(error));
  };


  return (
    <div className="App">
      <Navbar />

      <div>

        <h1>Recipes</h1>
        <h1>hi</h1>
        {/* <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <h2>{recipe.title}</h2>
              <p>Instructions: {recipe.instructions}</p>
              <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            </li>
          ))}
        </ul> */}
      </div>

      {/* <div>
        <h1>Edamam Recipes</h1>
        <ul>
          {edamamRecipes.map((hit, index) => {
            const recipe = hit.recipe;
            return (
              <li key={index}>
                <h2>{recipe.label}</h2>
                <img src={recipe.image} alt={recipe.label} />
                <p>Calories: {recipe.calories}</p>
                <p>Ingredients:</p>
                <ul>
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient.text}</li>
                  ))}
                </ul>
                <p>Instructions:</p>
                { <ol>
                  {recipe.ingredientLines.map((instruction, i) => (
                    <li key={i}>{instruction}</li>
                  ))}
                </ol> }
                <p>
                  <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                    See Recipe
                  </a>
                </p>

              </li>

            );
          })}
        </ul>
      </div> */}
      <div>
        <h1>Edamam Recipes (Top 5)</h1>
        <div>
          <input
            type="text"
            placeholder="Search for recipes"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <ul>
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
                {/* Add more details you want to display */}
              </li>
            );
          })}
        </ul>
      </div>


    </div>
  );
}

export default App;
