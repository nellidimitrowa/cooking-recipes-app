import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { Button } from '../Button.js';
import { MenuItems } from './MenuItems';
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Navbar-logo">Cooking Recipes<i className="fal fa-hat-chef"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>{item.title}</a>
              </li>
            )
          })}
        </ul>
        <Button>Sign up</Button>
      </nav>
    );
  }
}

export default Navbar;
