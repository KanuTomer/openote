import React from 'react';
import { Link } from 'react-router-dom';
import './Css/navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          {/* Link to the homepage */}
          <Link to="/" className="logo">
            openote.
          </Link>
        </div>
        <div className="navbar-right">
          <nav>
            {/* Links to other routes */}
            <Link to="/login ">uploads</Link>
            <Link to="/notes">library</Link>
            <Link to="/login">
              <img src="/user-icon.png" alt="User Icon" className="user-icon" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
