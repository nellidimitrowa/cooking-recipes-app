import React from 'react';
import { Route } from 'react-router-dom';
import './Home.css';

function Recipe({ recipe }) {
    const { name, description, imagePath, ingredients } = recipe;
    return (
        <div className="recipe">
            <h2>{name}</h2>
            <img src={imagePath} alt={description} />
            <Route render={({ history }) => (<button type='button' onClick={() => { history.push('/recipeDetails') }}>Go to the recipe</button>)} />
        </div>
    )
}

export default Recipe;