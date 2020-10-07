import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
      </div>
    </Router>
  );
}

export default App;
