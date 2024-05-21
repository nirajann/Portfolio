import React, { useState,useEffect ,useRef} from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import Kinet from 'kinet';
import '../../style/Header.css';

const Header = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const location = useLocation();

  const handleNavClick = (section) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${section}`;
    } else {
      if (section === 'work') {
        scroll.scrollTo(document.getElementById('contact').offsetTop, {
          duration: 500,
          smooth: true,
        });
      } else {
        scroll.scrollTo(document.getElementById(section).offsetTop, {
          duration: 500,
          smooth: true,
        });
      }
    }
  };

  useEffect(() => {
    // create instance of kinet with custom settings
    var kinet = new Kinet({
        acceleration: 0.02,
        friction: 0.25,
        names: ["x", "y"],
    });

    // select circle element
    var circle = document.getElementById('circle');

    // check if circle element exists
    if (circle) {
        // set handler on kinet tick event
        kinet.on('tick', function (instances) {
            circle.style.transform = `translate3d(${instances.x.current}px, ${instances.y.current}px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${instances.y.velocity / 2}deg)`;
        });
    }

    // call kinet animate method on mousemove
    document.addEventListener('mousemove', function (event) {
        kinet.animate('x', event.clientX - window.innerWidth / 2);
        kinet.animate('y', event.clientY - window.innerHeight / 2);
    });

    // log
    kinet.on('start', function () {
        console.log('start');
    });

    kinet.on('end', function () {
        console.log('end');
    });
}, []);


  return (
    <div className='BG'>
    <div className={isDarkMode ? "dark-mode" : ""}>
   
        <nav id="nav">
          <div className="navWrapper">
            <a href="#" id="logo">NirajanGautam</a>
            <div className="right">
              <div id="nav-icon" onClick={toggleOverlay}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={`overlay ${isOverlayOpen ? 'open' : ''}`}>
                <div className="overlayContent">
              
                  <a  onClick={() => handleNavClick('Work')} id="services">Services</a>
                  <a onClick={() => handleNavClick('Work')} id="work">Our work</a>
                  <a onClick={() => handleNavClick('Work')} id="contactid">Contact</a>
                  <p>Copyright 2018</p>
                </div>
              </div>
            </div>
          </div>
          {/* <form id="toogleform">
            <input type="checkbox" className="toggle" checked={isDarkMode} onChange={toggleDarkMode} />
            <div className="curtain"></div>
          </form> */}
        </nav>
 
    </div>
    </div>
  );
};

export default Header;
