import React from 'react';
import { Link } from 'react-router-dom';
import logoHeader from '../../assets/images/logoHeader.png'; 

import { contactInfo } from '../../assets/info';
import { menuItems } from '../../assets/info';

import '../styles/footer/FooterDesktop.css'; // Стили для Footer

const FooterDesktop = () => {
  return (
    <div className="app-container">
          <div className="footer">
      <div className="footer__content">
        {/* Логотип */}
        <div className="footer__logo">
          <img src={logoHeader} alt="Logo" className="footer__logo-img" />
          <p className='footer_description-text'>Веб-разработка и усиление IT-команд</p>
        </div>

        {/* Контактаня информация */}
        <div className="footer__contacts">
            {Object.values(contactInfo).map((info, index) => (
              <p key={index}>{info}</p> // Динамически выводим каждый элемент
            ))}
          </div>
          
        {/* Меню */}
        <div className="footer__info">
         {/* Ссылки */}
         <div className="footer__links">
                <div className="footer__links-left">
                    {menuItems.slice(0, 3).map(item => (
                    <Link to={item.path} key={item.key}>{item.label}</Link>
                    ))}
                </div>
                <div className="footer__links-right">
                    {menuItems.slice(3).map(item => (
                    <Link to={item.path} key={item.key}>{item.label}</Link>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default FooterDesktop;
