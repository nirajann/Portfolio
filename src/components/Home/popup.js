import React from 'react';
import '../../style/popup.css';

const Popup = ({ project, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="close-button" onClick={onClose}>×</div>
        <img src={project.imgSrc} alt={project.title} className="project-image" />
        <div className="project-details">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>Date: {project.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
