import React, { useState } from 'react';
import Group_1347 from './../assets/images/Group_1347.png'
import './../components/styles/ProjectRequestForm.css';

const ProjectRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = 'kURO4sh3a6OcYWICYjnKmm249Mnt4fez0wYInJxX';

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Валидация данных формы
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Пожалуйста, заполните все обязательные поля.");
      return;
    }
  
    try {
      setLoading(true);
      const response = await fetch('https://api.test.cyberia.studio/api/v1/feedbacks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          phone: formData.phone,
          email: formData.email,
          message: formData.message
        })
      });
  
      if (response.ok) {
        alert("Данные успешно отправлены!");
      } else if (response.status === 422) {
        const errorData = await response.json();
        setError(errorData);
        alert(`Ошибка: ${errorData.message}`);
      } else {
        alert("Произошла ошибка при отправке данных!");
      }
    } catch (error) {
      console.error("Error sending feedback", error);
      alert("Произошла ошибка при отправке данных.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="form-container">
        <h1>            
            Рассскажите<br/> о вашем проекте:
        </h1>
        {/* <h1> */}
            {/* Рассскажите<br/> о вашем проекте: */}
            <img src={Group_1347} alt="project" className="h1-image" />
        {/* </h1> */}

      <form onSubmit={handleSubmit} className="project-request-form">
        <div className="form-group-group">
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Ваше имя*</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email*</label>
          </div>

          <div className="form-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <label htmlFor="phone">Телефон*</label>
          </div>
        </div>

        <div className="form-group">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Сообщение*</label>
        </div>

        <div className="form-group_checkbox">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
          />
          <p htmlFor="consent">
            Согласие на обработку персональных данных
          </p>
        </div>

        {/* Кнопка отправки */}
        <button 
          type="submit" 
          className="submit-btn" 
          disabled={!formData.consent || loading}
        >
          {loading ? "" : ""}
        </button>

        <p className='consent-text'>Нажимая “Отправить”, Вы даете согласие<br/> на обработку персональных данных</p>

        {error && <div className="error-message">Ошибка: {error.message}</div>}
      </form>
    </div>
  );
};

export default ProjectRequestForm;
