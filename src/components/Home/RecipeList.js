import React from 'react';
import { Route } from 'react-router-dom';
import './Home.css';

function RecipeList({ recipe }) {
    const { name, description, imagePath } = recipe;
    return (
        <div className="recipe">
            <h2>{name}</h2>
            <img src={imagePath} alt={description} />
            <Route render={({ history }) => (<button type='button' onClick={() => { history.push(`/recipeDetails/${recipe.id}`) }}>Recipe details</button>)} />
        </div>
    )
}

export default RecipeList;