// Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png" alt="Logo" />
      </div>
      <div className="menu-items">
        <a href="#">Home</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Latest</a>
        <a href="#">Contact-Us</a>
        {/* Add more menu items as needed */}
      </div>
      <div className="icons">
        <a href="#"><FontAwesomeIcon icon={faSearch} className="icon" /> </a>
        <a href="#"><FontAwesomeIcon icon={faUser} className="icon" /> </a>
        <a href="#"> <FontAwesomeIcon icon={faShoppingCart} className="icon" /> </a>
      </div>
    </nav>
  );
};

export default Navbar;
