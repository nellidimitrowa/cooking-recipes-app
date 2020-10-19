import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import "./AddNewRecipe.css";

function  AddNewRecipe () {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [ingredients, setIngredients] = useState([{ name: "", amount: "" }]);
  const history = useHistory();

  const handleAdd = () => {
    setIngredients([...ingredients, { name: "", amount: "" }]);
  }

  const handleRemove = (i) => {
    const values = [...ingredients];
    values.splice(i, 1);
    setIngredients(values);
  }


  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const values = [...ingredients];
    values[index][name] = value;
    setIngredients(values);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: recipeName,
      description: description,
      imagePath: imagePath,
      ingredients: ingredients
    }
    axios.post(`http://localhost:3000/recipes`, data)
      .then(result => {
        console.log(result);
    });
    history.push('/');
  };

  const onRecipeNameChange = (e) => {
    setRecipeName(e.target.value);
  }

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const onImagePathChange = (e) => {
    setImagePath(e.target.value);
  }

    return (
      <div className="add-recipe-wrapper">
        <label htmlFor="name">NAME</label>
        <input type="text" id="recipeName" value={recipeName} name="recipeName" onChange={onRecipeNameChange} />
        <label htmlFor="description">DESCRIPTION</label>
        <input type="text" id="description" value={description} name="description" onChange={onDescriptionChange} />
        <label htmlFor="imagePath">IMAGE PATH</label>
        <input type="text" id="imagePath" value={imagePath} name="imagePath" onChange={onImagePathChange} />
        <label htmlFor="ingredients">INGREDIENTS</label>
        <button className="add-ingredients_button" onClick={() => handleAdd()}>Add ingredient</button>
        <br />
        <label htmlFor="name">NAME</label>
        <label className="amountLabel" htmlFor="amount">AMOUNT</label>
        {ingredients.map((ingredient, idx) => {
          return (
            <div key={`${ingredient}-${idx}`}>
              <ul>
                <li className="ingredients">
                  <input type="text" id="name" value={ingredients.name} name="name" onChange={e => handleChange(idx, e)} />
                  <input className="amountInput" type="text" id="amount" value={ingredients.amount} name="amount"  onChange={e => handleChange(idx, e)} />
                  <button className="remove_ingredient_button" onClick={() => handleRemove(idx)}>delete</button>
                </li>
              </ul>
            </div>
          );
        })}
        <input type="submit" value="submit" className="submitButton" onClick={onSubmitHandler} />
      </div>
    );
}

export default AddNewRecipe;
