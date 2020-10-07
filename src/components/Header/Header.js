import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <ul className="menu-ul">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
      </ul>
      <div  className="title">
        <img alt="Logo" src={logo} />
        <h1>Cooking Recipes</h1>
      </div>
    </div>
  );
}

export default Header;
