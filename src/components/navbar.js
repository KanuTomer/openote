import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

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
            <Link to="/uploads">uploads</Link>
            <Link to="/library">library</Link>
            <Link to="/signup">
              <img src="/user-icon.png" alt="User Icon" className="user-icon" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
