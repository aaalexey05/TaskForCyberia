import React from 'react';

import imgCard from './../../assets/images/imgCard.png';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-card__image-container">
        <img src={project.image} alt={project.title} className="project-card__image" />
        <div className="project-card__text-overlay">
          <div className="project-card__square">
            <h3 className="project-card__title">{project.title}</h3>
          </div>
          <img src={imgCard} alt="imgCard" className="project-card__img-card make-blue" />
          <p className="project-card__description">
            Онлайн гипермаркет. Для компании <br/> 
            были разработаны сайт и мобильное <br/> 
            приложение и т.д.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
