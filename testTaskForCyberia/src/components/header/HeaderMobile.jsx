import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoHeader from '../../assets/images/logoHeader.png';
import { contactInfo } from '../../assets/info.js';

import './../styles/header/HeaderMobile.css'; // Стили для мобильной версии

const HeaderMobile = ({ menuItems }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(null); // Track the active menu item

  const openDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const handleMenuItemClick = (key) => {
    setActiveItem(key); // Set the active item on click
    // Delay the closing of the drawer for a smooth transition
    setTimeout(() => {
      closeDrawer();
    }, 300); // Set the delay to match the transition duration
  };

  return (
    <header className="header">
      <div className="header__content">
        {/* Логотип */}
        <div className="header__logo">
          <Link to="/">
            <img src={logoHeader} alt="Logo" className="header__logo-img" />
          </Link>
        </div>

        {/* Иконка для мобильного меню */}
        <div className="header__menu-mobile">
          <button onClick={openDrawer} className="header__menu-btn">
            &#9776; {/* Using Unicode for the hamburger icon */}
          </button>
        </div>

        {/* Мобильное меню */}
        {drawerVisible && (
          <div className={`header__drawer ${drawerVisible ? 'open' : ''}`}>
            <button onClick={closeDrawer} className="header__close-btn">
              &times; {/* Using Unicode for the close icon */}
            </button>

            <nav className="header__menu">
              <ul>
                {menuItems.map(item => (
                  <li key={item.key}>
                    <Link
                      to={item.path}
                      className={activeItem === item.key ? 'active' : ''}
                      onClick={() => handleMenuItemClick(item.key)} // Close menu when clicked
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <hr className="hr-line" />

            <p className="contact-menu">Контакты:</p>
            <ul className="contact-info-menu">
              {Object.values(contactInfo).map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>

            <hr className="hr-line" />
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderMobile;
