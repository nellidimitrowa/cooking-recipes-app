import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import './RecipeDetails.css';
import Comments from '../Comments/Comments';

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState([]);
    const { id } = useParams();
    const history = useHistory();
    const recipeUrl = `http://localhost:3000/recipes/${id}`;

    const getData = async () => {
        const result = await axios.get(recipeUrl);
        return result.data;
    }

    useEffect(() => {
        getData().then(recipe => setRecipe(recipe));
    }, []);

    function handleDelete() {
        axios.delete(recipeUrl);
        history.goBack();
    }

    return (
        <div className="container">
            <div className="active-recipe">
                <h1 className="active-recipe_title">{recipe.name}</h1>
                <h5 className="active-recipe_description">{recipe.description}</h5>
                <img className="active-recipe_img" src={recipe.imagePath} alt={recipe.name}></img>
                <button className="active-recipe_button" onClick={handleDelete}>Delete</button>
                <button className="active-recipe_button">Edit</button>
                <h2 className="active-recipe_ingredients">Ingredients</h2>
                <ul>
                    {
                        recipe.ingredients ?
                            recipe.ingredients.map((ingredient, index) => (<li className="active-recipe_ingredient" key={index}>{ingredient.amount} {ingredient.name}</li>)) :
                            "Loading..."
                    }
                </ul>
                <Comments recipe={recipe} />
            </div>
        </div>
    )
}

export default RecipeDetails;