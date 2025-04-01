import React from 'react';
import { FaShoppingBasket, FaBars, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <FaShoppingBasket /> Foodie
      </a>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/terms">Terms & Conditions</a>
      </nav>
      <div className="icons">
        <div className="fas fa-bars" id="menu-btn"><FaBars /></div>
        <div className="fas fa-search" id="search-btn"><FaSearch /></div>
        <div className="fas fa-shopping-cart" id="cart-btn"><FaShoppingCart /></div>
        <div className="fas fa-user" id="login-btn"><FaUser /></div>
      </div>
      <form className="search-form">
        <input type="search" id="search-box" placeholder="search here..." />
        <label htmlFor="search-box"><FaSearch /></label>
      </form>
    </header>
  );
};

export default Header;