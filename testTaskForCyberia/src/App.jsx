import './index.css';
import { Routes, Route } from 'react-router-dom'; // Импортируем компоненты для роутинга

import HeaderComponent from './../src/components/header/HeaderComponent.jsx';
import Footer from './components/footer/Footer.jsx';
import Breadcrumbs from './components/Breadcrumbs';  // Подключаем компонент хлебных крошек

// Страницы
import HomePage from '../src/components/pages/HomePage.jsx';
import BlogPage from '../src/components/pages/BlogPage.jsx';
import CasesPage from '../src/components/pages/CasesPage.jsx';
import ContactsPage from '../src/components/pages/ContactsPage.jsx';
import ServicesPage from '../src/components/pages/ServicesPage.jsx';

function App() {
  return (
    <div className='app-container'>
      <HeaderComponent />
      <Breadcrumbs />  
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<CasesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
