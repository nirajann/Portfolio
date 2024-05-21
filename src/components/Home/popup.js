import React from 'react';
import '../../style/popup.css';
import $ from 'jquery';

const Popup = ({ project, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {/* <div className="close-button" onClick={onClose}>×</div>
        <img src={project.imgSrc} alt={project.title} className="project-image" />
        <div className="project-details">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>Date: {project.date}</p>
        </div> */}
 
 
 <div className="scene">
      <div className="book-wrap">
        <div className="left-side">
          <div className="book-cover-left"></div>
          <div className="layer1">
            <div className="page-left"></div>
          </div>
          <div className="layer2">
            <div className="page-left"></div>
          </div>
          <div className="layer3">
            <div className="page-left"></div>
          </div>
          <div className="layer4">
            <div className="page-left"></div>
          </div>
          <div className="layer-text">
            <div className="page-left-2">
              <div className="corner"></div>
              <div className="corner2"></div>
              <div className="corner-fold"></div>
              <div className="page-text w-richtext">
                
              <img src={project.imgSrc} alt={project.title} className="project-image" />
              
              </div>
            </div>
          </div>
        </div>
        <div className="center"></div>
        <div className="right-side">
          <div className="book-cover-right"></div>
          <div className="layer1">
            <div className="page-right"></div>
          </div>
          <div className="layer2 right">
            <div className="page-right"></div>
          </div>
          <div className="layer3 right">
            <div className="page-right"></div>
          </div>
          <div className="layer4 right">
            <div className="page-right"></div>
          </div>
          <div className="layer-text right">
            <div className="page-right-2">
              <div className="page-text w-richtext">
                <h3><strong>Tools Used</strong></h3>
               
                <h3>Project Name : {project.title}</h3>
                <h6>
                  BY <a href="#" target="_blank" rel="noopener noreferrer">Nirajan Gautam  {project.date}</a>
                </h6>
                <p>{project.description}</p>
                <h6>
                GithubLink<a href={project.github} target="_blank" rel="noopener noreferrer">{project.title}</a>
                </h6>
                <p>{project.tools}‍</p>
                <p>{project.pic}</p>
                <p>‍</p>
                <p>{project.tools}‍</p>
                <p>{project.pic}</p>
                <p>‍</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      
    </div>
    
    
  );
};

export default Popup;
