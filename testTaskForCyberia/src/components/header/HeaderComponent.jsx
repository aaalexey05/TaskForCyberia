import { useState, useEffect } from 'react';
import HeaderDesktop from './HeaderDesktop.jsx';
import HeaderMobile from './HeaderMobile.jsx';

import { menuItems } from '../../assets/info.js';

import '../styles/header/HeaderComponent.css'; // Общие стили для всего хедера

const HeaderComponent = () => {
  const [isMobile, setIsMobile] = useState(false); // Для отслеживания мобильного устройства
  const [drawerVisible, setDrawerVisible] = useState(false); // Для отображения/скрытия меню

  const openDrawer = () => {
    setDrawerVisible(true);  // Открывает Drawer
  };
  
  const closeDrawer = () => {
    setDrawerVisible(false); // Закрывает Drawer
  };
  
  // Функция для обновления состояния в зависимости от ширины экрана
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true); // Устанавливаем состояние как мобильное
    } else {
      setIsMobile(false); // Устанавливаем состояние как десктопное
    }
  };

  // Отслеживаем изменение размера экрана
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <HeaderMobile 
          menuItems={menuItems} 
          drawerVisible={drawerVisible} 
          openDrawer={openDrawer} 
          closeDrawer={closeDrawer} 
        />
      ) : (
        <HeaderDesktop menuItems={menuItems} />
      )}
    </>
  );
};

export default HeaderComponent;
