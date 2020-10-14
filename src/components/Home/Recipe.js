import React from 'react'; 
import './Home.css';

function Recipe({recipe}) {
    const {name, description, imagePath, ingredients} = recipe;
    return(
        <div className="recipe">
            <h2>{name}</h2>
            <img src={imagePath} alt={description}/>
            <button>Go to the recipe</button>
        </div>
    )
}

export default Recipe;