import React from "react";
import axios from "axios";
import "./AddNewRecipe.css";

class AddNewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: "",
      description: "",
      imagePath: "",
      ingredients: [{
        name: null,
        amount: null
      }]
    };
  }

  changeHandler = (e) =>{
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAdd = () => {
    const values = [...this.state.ingredients];
    values.push({ name: null, amount: null });
    this.setState({ ingredients: values });
  }

  handleRemove = (i) => {
    const values = [...this.state.ingredients];
    console.log(values);
    values.splice(i, 1);
    this.setState({ ingredients: values });
  }

  handleChange = (i, event) => {
    const values = [...this.state.ingredients];
    values[i].value = event.target.value;
    this.setState({ ingredients: values });
  }

  handleNameChange = (i, event) => {
    const values = [...this.state.ingredients];
    values[i].name = event.target.value;
    this.setState({ name: values });
  };

  handleAmountChange = (i, event) => {
    const values = [...this.state.ingredients];
    values[i].amount = event.target.value;
    this.setState({ amount: values });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.recipeName,
      description: this.state.description,
      imagePath: this.state.imagePath,
      ingredients: this.state.ingredients
    }
    axios.post(`http://localhost:3000/recipes`, data)
      .then(result => {
        console.log(result);
    });
    this.setState({ 
      name:'',
      description: '',
      imagePath: '',
      ingredients: ''
     });
  };

  render() {
    return (
      <div className="add-recipe-wrapper">
        <label htmlFor="name">NAME</label>
        <input type="text" id="recipeName" value={this.state.recipeName} name="recipeName" onChange={this.changeHandler} />
        <label htmlFor="description">DESCRIPTION</label>
        <input type="text" id="description" value={this.state.description} name="description" onChange={this.changeHandler} />
        <label htmlFor="imagePath">IMAGE PATH</label>
        <input type="text" id="imagePath" value={this.state.imagePath} name="imagePath" onChange={this.changeHandler} />
        <label htmlFor="ingredients">INGREDIENTS</label>
        <button className="add-ingredients_button" onClick={() => this.handleAdd()}>Add ingredient</button>
        <br />
        <label htmlFor="name">NAME</label>
        <label className="amountLabel" htmlFor="amount">AMOUNT</label>
        {this.state.ingredients.map((ingredient, idx) => {
          return (
            <div key={`${ingredient}-${idx}`}>
              <ul>
                <li className="ingredients">
                  <input type="text" id="name" value={this.state.ingredients.name} name="name" onChange={e => this.handleNameChange(idx, e)} />
                  <input className="amountInput" type="text" id="amount" value={this.state.ingredients.amount} name="amount"  onChange={e => this.handleAmountChange(idx, e)} />
                  <button className="remove_ingredient_button" onClick={() => this.handleRemove(idx)}>delete</button>
                </li>
              </ul>
            </div>
          );
        })}
        <input type="submit" value="submit" className="submitButton" onClick={this.onSubmitHandler} />
      </div>
    );
  }
}

export default AddNewRecipe;
