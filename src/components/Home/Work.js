import React, { useState } from "react";
import "../../style/Work.css";
import Popup from "../Home/popup";
import Passportpal from "../../assets/Image/Passportpal.jpg";

const projects = [
  {
    id: 1,
    category: "Website",
    title: "UrbanSage",
    date: "Oct 2023",
    description:
      "React Webiste created using Html, Css, Javascript and Mongodb",
    imgSrc:
      "https://th.bing.com/th/id/OIP.gksOxdTXUt7DWe7Nmc0tHgHaE7?rs=1&pid=ImgDetMain",
    github: "Portfolio Project/portfolio/src/components/Home/popup.js",
  },
  {
    id: 2,
    category: "App",
    title: "Passport Pal",
    date: "July 2023",
    description: "‍Flutter Project Created using firebase as Backend.",
    imgSrc: Passportpal,
    github: "https://github.com/nirajann/PassportPal.git",
  },
  {
    id: 3,
    category: "Website",
    title: "EasyBuy",
    date: "August 2022",
    description: "website Created Using python Django Framework",
    imgSrc:
      "https://th.bing.com/th/id/OIP.jOnthmKSrbY567ye4h0LVAAAAA?rs=1&pid=ImgDetMain",
    github: "https://github.com/nirajann/easybuyshop.git",
  },
  // Add more projects as needed
];

const Work = () => {
  const [filter, setFilter] = useState("all");
  const [popupProject, setPopupProject] = useState(null);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) => project.category.toLowerCase() === filter.toLowerCase()
        );

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
            {filteredProjects.map((project) => (
              <div
                className="project-card"
                key={project.id}
                onClick={() => openPopup(project)}
              >
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
      {popupProject && (
        <Popup project={popupProject} onClose={() => setPopupProject(null)} />
      )}
    </section>
  );
};

export default Work;
