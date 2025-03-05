import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoHeader from '../../assets/images/logoHeader.png'; 

import './../styles/header/HeaderDesktop.css'; // Custom styles

const HeaderDesktop = ({ menuItems }) => {
  const location = useLocation();

  // Generate selected keys based on path
  const getSelectedKeys = () => {
    return menuItems
      .filter(item => location.pathname === item.path) // Compare current path with the item path
      .map(item => item.key); // Return the active menu item key
  };

  return (
    <header className="header">
      <div className="header__content">
        {/* Logo */}
        <div className="header__logo">
          <Link to="/">
            <img src={logoHeader} alt="Logo" className="header__logo-img" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="header__menu-desktop">
          <ul className="header__menu-list">
            {menuItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <li
                  key={item.key}
                  className={`header__menu-item ${isActive ? 'active' : ''}`}
                >
                  <Link to={item.path} className="header__menu-link">
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderDesktop;
