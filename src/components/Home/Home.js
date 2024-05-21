import {React, useEffect, useState }from 'react';
import Contact from './Contact';
import About from './About';
import '../../style/home.css';
import Work from './Work';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';


const Home = () => {
  const location = useLocation();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
    let x1 = 0, y1 = 0;

    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const dist_to_draw = 50;
    const delay = 1000;
    const fsize = ['1.1rem', '1.4rem', '.8rem', '1.7rem'];
    const colors = [
      '#E23636',
      '#F9F3EE',
      '#E1F8DC',
      '#B8AFE6',
      '#AEE1CD',
      '#5EB0E5'
    ];

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const selRand = (o) => o[rand(0, o.length - 1)];
    const distanceTo = (x1, y1, x2, y2) => Math.sqrt((Math.pow(x2 - x1, 2)) + (Math.pow(y2 - y1, 2)));
    const shouldDraw = (x, y) => (distanceTo(x1, y1, x, y) >= dist_to_draw);

    const addStr = (x, y) => {
      const str = document.createElement("div");
      str.innerHTML = '&#10022;';
      str.className = 'star';
      str.style.top = `${y + rand(-20, 20)}px`;
      str.style.left = `${x}px`;
      str.style.color = selRand(colors);
      str.style.fontSize = selRand(fsize);
      document.getElementById('mouse-trail').appendChild(str);

      const fs = 10 + 5 * parseFloat(getComputedStyle(str).fontSize);
      str.animate({
        translate: `0 ${(y + fs) > vh ? vh - y : fs}px`,
        opacity: 0,
        transform: `rotateX(${rand(1, 500)}deg) rotateY(${rand(1, 500)}deg)`
      }, {
        duration: delay,
        fill: 'forwards',
      });

      setTimeout(() => {
        str.remove();
      }, delay);
    };

    const mouseMoveHandler = (e) => {
      const { clientX, clientY } = e;
      if (shouldDraw(clientX, clientY)) {
        addStr(clientX, clientY);
        x1 = clientX;
        y1 = clientY;
      }
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, [])
  return (
    <>
    <div id="Awesome" class="anim750">
	
  <div class="reveal circle_wrapper">
		<div class="circle">Hello!</div>
	</div>
						
	<div class="sticky anim750">
		<div class="front circle_wrapper anim750">
			<div class="circle anim750"></div>
	  </div>
	</div>
	
  <h4>Peel Me!</h4>
						
  <div class="sticky anim750">
		<div class="back circle_wrapper anim750">
			<div class="circle anim750"></div>
		</div>
	</div>
						
</div>
     <form id="toogleform">
            <input type="checkbox" className="toggle" checked={isDarkMode} onChange={toggleDarkMode} />
            <div className="curtain"></div>
          </form>
  <div className='BG'>
    <div className={isDarkMode ? "dark-mode" : ""}>
      <div className="background">
       
        <div className="header">
          <div className="headerWrapper">
            <h6>we do</h6>
            <h1>Web Design <br /> & Development</h1>
            <a class="button-wrapper" href="/GetinTouch">
  <span class="dot dot-1"></span>
  <span class="dot dot-2"></span>
  <span class="dot dot-3"></span>
  <span class="dot dot-4"></span>
  <span class="dot dot-5"></span>
  <span class="dot dot-6"></span>
  <span class="dot dot-7"></span>
  <span class="button bg-yellow-500 px-16 py-4 rounded-full uppercase">GET IN TOUCH</span>
</a>
    
    <div id="circle" class="circle bg-yellow-500"></div>
         
            <div className="circle blue"></div>
            <div className="square red"></div>
            <div className="triangle green">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 177.893 177.893">
                {/* Your SVG code */}
              </svg>
             
            </div>
            <div className="circle orange"></div>
          </div>
        </div>

        
      </div>
      
   
    </div>
    </div>
         <div id="mouse-trail" className="mouse-trail"></div>
         <div className="section services">
        <div className="sectionWrapper">
          <h6>what we offer</h6>
          <h2>Our services</h2>
          <p className="description">I am developing these skills from when I was 12 years old. I still love what I do and I would love to share my knowledge with the world.</p>
          <div className="square blue"></div>
          <div className="grid">
            <div className="card">
              <h3>Web Development</h3>
              <p>I create websites and web services.</p>
              <div id="app"></div>
            </div>
            <div className="card">
              <h3>Web Design</h3>
              <p>I design webpages and web platforms.</p>
            </div>
            <div className="card">
              <h3>Branding</h3>
              <p>I design brand guidelines and brand styles.</p>
            </div>
            <div className="card">
              <h3>Social Media Marketing</h3>
              <p>I run a social media business.</p>
            </div>
          </div>
        </div>
      </div>

      <section id="about">
        <About />
        <section id="Work">
        <Work />
      </section>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
