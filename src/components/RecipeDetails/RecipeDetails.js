import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './RecipeDetails.css';

function RecipeDetails() {
    const [recipe, setRecipe] = useState([]);
    const { id } = useParams();
    const recipeUrl = `http://localhost:3000/recipes/${id}`;
    
    const getData = async () => {
        const result = await axios.get(recipeUrl);
        return result.data;
    }

    useEffect(() => {
        getData().then(recipe => setRecipe(recipe));
      }, []);

    return (
        <div className="container">
            <div className="active-recipe">
                <img className="active-recipe_img" src={recipe.imagePath}></img>
                <button className="active-recipe_button">Delete</button>
                <button className="active-recipe_button">Edit</button>
                <h1 className="active-recipe_title">{recipe.name}</h1>
                <h5 className="active-recipe_description">{recipe.description}</h5>
                <h2 className="active-recipe_ingredients">Ingredients:</h2>
                <ul>
                    {   
                        recipe.ingredients ?
                        recipe.ingredients.map((ingredient, index) => (<li className="active-recipe_ingredient" key={index}>{ingredient.amount} {ingredient.name}</li>)) :
                        "Loading..."
                    }
                </ul>
            </div>
        </div>
    )
}

export default RecipeDetails;