import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from './../assets/info.js'; // импортируем menuItems

import './styles/Breadcrumbs.css'

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(path => path); // разделяем путь по слешам

  // Функция для получения текста хлебных крошек на основе пути
  const getBreadcrumbLabel = (path) => {
    const item = menuItems.find(item => item.path === `/${path}`);
    return item ? item.label : 'Информация об агенстве'; // если нет совпадений, показываем "Главная"
  };

  // Получаем последний элемент из пути, который будет заголовком
  const currentPageLabel = getBreadcrumbLabel(paths[paths.length - 1]);

  return (
    <div className="breadcrumb">
      <p className="breadcrumb__links">
        {/* Хлебные крошки: показываем только ссылки, без последнего сегмента */}
        {paths.map((path, index) => (
          <span key={index}>
            <Link to={`/${path}`} className="breadcrumb__link">
              <span className='main-link'>Главная / </span> 
              <span className='after_main-link'>{getBreadcrumbLabel(path)}</span>
            </Link>
            {index < paths.length - 1 ? ' / ' : ''}
          </span>
        ))}
      </p>
      {/* Отображаем только текст текущей страницы, без ссылки */}
      <h2 className="breadcrumb__current">{currentPageLabel}</h2>
    </div>
  );
};

export default Breadcrumbs;
