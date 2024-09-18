import React from 'react';
import logo from '../assets/logo.jpg';

const Header = ({ onMenuClick }) => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="menu-icon" onClick={onMenuClick}>
        ☰
      </button>
    </header>
  );
};

export default Header;
