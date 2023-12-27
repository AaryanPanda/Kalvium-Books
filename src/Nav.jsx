import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Logo.png';
import serch from './assets/search.png';
import './Register.css';

function Nav({ setSearchTerm }) {
  const handleSearch = (event) => {
    const searchTerm = event.target.parentElement.previousSibling.firstChild.value;
    setSearchTerm(searchTerm);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',})
  };

  return (
    <div>
      <div id="navbar-container">
        <div id="navbar">
          <Link to='/' >
          <div id="logo">
            <img src={logo} alt="" />
            <p>Books</p>
          </div>
          </Link>
          <div id="search">
            <div id="search-box">
              <input id="input-bar" type="text" placeholder="Search Books" />
            </div>
            <div id="search-icon">
              <img src={serch} onClick={handleSearch} alt="" />
            </div>
          </div>
          <Link to="/Registration">
            <div id="register">
              <p id="reg-text">Register</p>
            </div>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Nav;

