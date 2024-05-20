import React, { useState } from 'react';
import '../../style/Work.css';
import Popup from '../Home/popup';

const projects = [
  {
    id: 1,
    category: 'Website',
    title: 'Little Ashé',
    date: 'July 2023',
    description: 'Website, Shopify',
    imgSrc: 'https://th.bing.com/th/id/OIP.gksOxdTXUt7DWe7Nmc0tHgHaE7?rs=1&pid=ImgDetMain',
  },
  {
    id: 2,
    category: 'App',
    title: 'Another Project',
    date: 'June 2023',
    description: 'App Development',
    imgSrc: 'https://th.bing.com/th/id/R.3180704aa922956d6229cfb878b09efd?rik=aGZTZNUgP0hzvQ&pid=ImgRaw&r=0',
  },
  {
    id: 3,
    category: 'Shopify',
    title: 'Shopify Project',
    date: 'August 2023',
    description: 'Graphic',
    imgSrc: 'https://th.bing.com/th/id/OIP.-Z1urk3qQh67W32egtTorAHaEu?rs=1&pid=ImgDetMain',
  },
  // Add more projects as needed
];

const Work = () => {
  const [filter, setFilter] = useState('all');
  const [popupProject, setPopupProject] = useState(null);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

  const openPopup = (project) => {
    setPopupProject(project);
  };

  return (
    <section className="services">
      <div className="container">
        <div className="section-header">
          <span className="tag">WORK</span>
          <h2>Dig into my universe</h2>
          <select className="filter" onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="website">Website</option>
            <option value="shopify">Shopify</option>
            <option value="app">App</option>
          </select>
        </div>
        <div className="projects-wrapper">
          <div className="projects">
            {filteredProjects.map(project => (
              <div className="project-card" key={project.id} onClick={() => openPopup(project)}>
                <img src={project.imgSrc} alt={project.title} />
                <div className="project-info">
                  <span>{project.date}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {popupProject && <Popup project={popupProject} onClose={() => setPopupProject(null)} />}
    </section>
  );
};

export default Work;
