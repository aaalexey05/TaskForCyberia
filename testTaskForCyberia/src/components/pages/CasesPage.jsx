import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../card/ProjectCard'; // Импортируем компонент карточки
import './../styles/CasesPage.css';

import ProjectRequestForm from './../ProjectRequestForm.jsx';

const CasesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null); // Состояние для выбранной категории
  const [categoryData, setCategoryData] = useState([]); // Данные проектов

  // Запрос к API для получения категорий
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://api.test.cyberia.studio/api/v1/project-categories');
        const data = await response.json();
        setCategories(data.items);
        setLoading(false);
      } catch (error) {
        console.error('Ошибка при загрузке категорий:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Запрос к API для получения проектов по категории
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await fetch('https://api.test.cyberia.studio/api/v1/projects');
        const data = await response.json();
        if (selectedCategory) {
          // Фильтруем проекты по выбранной категории
          const filteredData = data.items.filter((project) =>
            project.categories.some((cat) => cat.id === selectedCategory)
          );
          setCategoryData(filteredData); // Загружаем отфильтрованные данные
        } else {
          // Если категория не выбрана, показываем все проекты
          setCategoryData(data.items);
        }
      } catch (error) {
        console.error('Ошибка при загрузке проектов:', error);
      }
    };

    fetchCategoryData();
  }, [selectedCategory]);

  const hasContent = categoryData.length > 0 || categories.length > 0;

  return (
    <div className="cases-page">
      {/* Загружаем данные */}
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Данные загружаются, ожидайте...</p>
        </div>
      ) : (
        <>
          {/* Выбор категории */}
          <div className="categories-container">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)} // Обработчик клика
              >
                <h3>{category.name}</h3>
              </div>
            ))}
          </div>

          {/* Показываем карточки проектов */}
          <div className="projects-container">
            {categoryData.length > 0 ? (
              categoryData.map((project) => (
                <ProjectCard key={project.id} project={project} /> // Выводим карточки проектов
              ))
            ) : (
              <p>Нет проектов в этой категории</p>
            )}
          </div>
        </>
      )}

      {/* Показываем форму, если есть контент */}
      {hasContent && <ProjectRequestForm />}
    </div>
  );
};

export default CasesPage;
