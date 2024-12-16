import React from 'react';
import './Navbar.css';
import logo from './images/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>
      <ul className="nav-list">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#services">Services</a></li>
        <li className="nav-item"><a href="#contact">Portfolio</a></li>
        <li className="nav-item"><a href="#contact">Team</a></li>
        <li className="nav-item"><a href="#contact">Investers Relations</a></li>
        <li className="nav-item"><a href="#contact">New</a></li>
        <button className='button'>BLOG</button>
      </ul>
    </nav>
  );
}

export default Navbar;