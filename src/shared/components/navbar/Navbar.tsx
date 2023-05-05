import React from 'react';
import './Navbar.module.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_container">
        
        <a href="#" className="navbar_logo">
          <img src="/static/img/logo.png" alt="Logo" />
          Fora
        </a>

        <div className="navbar_toggle" id="mobile_menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className='navbar_menu'>
          <li className="navbar_item">
            <a href="#" className="navbar_links">Home</a>    
          </li>
        </ul>


      </div>
    </nav>
  );
}

export default Navbar;
