import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from './RecipeList';
import Alert from './Alert';
import './Home.css';

function Home() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const recipesUrl = `http://localhost:3000/recipes?q=${query}`;

  const getData = async () => {
    const result = await axios.get(recipesUrl);
    if (result.data.length !== 0) {
      setRecipes(result.data);
      setAlert("");
      setQuery("");
      return result.data;
    } else {
      setAlert("There is no food with such name");
    }
  }

  useEffect(() => {
    getData().then(recipes => setRecipes(recipes));
  });

  const onChange = (e) => {
    setQuery(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  }

  return (
    <div className="Home">
      <div className="search-and-add">
        <form className="search-form" onSubmit={onSubmit}>
          {alert !== "" && <Alert alert={alert} />}
          <input type="text" placeholder="Search food" autoComplete="off" onChange={onChange} value={query} />
          <input type="submit" value="search" />
        </form>
      </div>
      <div className="recipes">
        {
          recipes.length ?
            recipes.map(recipe => <RecipeList key={recipe.id} recipe={recipe} />) :
            null
        }
      </div>
    </div>
  )
}

export default Home;
