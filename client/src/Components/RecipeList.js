import React from 'react';
import RecipeCard from './RecipeCard'; // Import your RecipeCard component

const RecipeList = ({ recipes }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {recipes && recipes.length > 0 ? ( // Check if recipes is defined and not empty
                recipes.map((recipe, index) => (
                    <RecipeCard
                        key={index}
                        title={recipe.recipe.label}
                        image={recipe.recipe.image}
                        cuisineType={recipe.recipe.cuisineType}
                        ingredientLines={recipe.recipe.ingredientLines}
                        url={recipe.recipe.url}
                    />
                ))
            ) : (
                <p>No recipes found.</p>
            )}
        </div>
    );
};

export default RecipeList;