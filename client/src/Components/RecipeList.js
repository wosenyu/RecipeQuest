import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {recipes && recipes.length > 0 ? (
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