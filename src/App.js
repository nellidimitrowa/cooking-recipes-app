import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import RecipeDetails from  './components/RecipeDetails/RecipeDetails';
import Authentication from './components/Authentication/Authentication';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Authentication} />
          <Route path="/recipeDetails/:id" component={RecipeDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
