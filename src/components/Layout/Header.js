import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router-dom";
import Kinet from "kinet";
import "../../style/Header.css";

const Header = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNavClick = (section) => {
    setIsOverlayOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${section}`;
    } else {
      const element = document.getElementById(section);
      if (element) {
        scroll.scrollTo(element.offsetTop, {
          duration: 500,
          smooth: true,
        });
      }
    }
  };

  useEffect(() => {
    const kinet = new Kinet({
      acceleration: 0.02,
      friction: 0.25,
      names: ["x", "y"],
    });

    const circle = document.getElementById("circle");

    if (circle) {
      kinet.on("tick", function (instances) {
        circle.style.transform = `translate3d(${instances.x.current}px, ${instances.y.current}px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${instances.y.velocity / 2}deg)`;
      });
    }

    const handleMouseMove = (event) => {
      kinet.animate("x", event.clientX - window.innerWidth / 2);
      kinet.animate("y", event.clientY - window.innerHeight / 2);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => handleNavClick(link.id));
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', () => handleNavClick(link.id));
      });
    };
  }, []);

  return (
    <div className={`BG ${isDarkMode ? "dark-mode" : ""}`}>
      <nav id="nav">
        <div className="navWrapper">
          <a href="/" id="logo">
            NirajanGautam
          </a>
          <div className="right">
            <div id="nav-icon" className={isOverlayOpen ? "open" : ""} onClick={toggleOverlay}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`overlay ${isOverlayOpen ? "open" : ""}`}>
              <div className="overlayContent">
                <a onClick={() => handleNavClick("about")} id="About">
                About
                </a>
                <a onClick={() => handleNavClick("Work")} id="Work">
                  My work
                </a>
                <a onClick={() => handleNavClick("contact")} id="contactid">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
