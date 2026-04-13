import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ transparent = false }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${transparent ? '' : 'bg-dark'}`}>
      <div className="container">
        <h1 className="logo lg-heading text-light">WT</h1>
        <ul className={`nav-items ${menuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
