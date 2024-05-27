import React, { useEffect, useState, useRef } from "react";
import Contact from "./Contact";
import About from "./About";
import "../../style/home.css";
import Work from "./Work";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const typingTextRef = useRef(null);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const text = typingTextRef.current;

    const words = ["eat.", "sleep.", "code.", "repeat."];

    setTyper(text, words);

    function setTyper(element, words) {
      const LETTER_TYPE_DELAY = 75;
      const WORD_STAY_DELAY = 2000;

      const DIRECTION_FORWARDS = 0;
      const DIRECTION_BACKWARDS = 1;

      let direction = DIRECTION_FORWARDS;
      let wordIndex = 0;
      let letterIndex = 0;

      let wordTypeInterval;

      startTyping();

      function startTyping() {
        wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
      }

      function typeLetter() {
        const word = words[wordIndex];

        if (direction === DIRECTION_FORWARDS) {
          letterIndex++;

          if (letterIndex === word.length) {
            direction = DIRECTION_BACKWARDS;
            clearInterval(wordTypeInterval);
            setTimeout(startTyping, WORD_STAY_DELAY);
          }
        } else if (direction === DIRECTION_BACKWARDS) {
          letterIndex--;

          if (letterIndex === 0) {
            nextWord();
          }
        }

        const textToType = word.substring(0, letterIndex);
        if (element) {
          element.textContent = textToType;
        }
      }

      function nextWord() {
        letterIndex = 0;
        direction = DIRECTION_FORWARDS;
        wordIndex++;

        if (wordIndex === words.length) {
          wordIndex = 0;
        }
      }
    }
  }, []);

  useEffect(() => {
    let x1 = 0,
      y1 = 0;

    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    const dist_to_draw = 50;
    const delay = 1000;
    const fsize = ["1.1rem", "1.4rem", ".8rem", "1.7rem"];
    const colors = [
      "#E23636",
      "#F9F3EE",
      "#E1F8DC",
      "#B8AFE6",
      "#AEE1CD",
      "#5EB0E5",
    ];

    const rand = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const selRand = (o) => o[rand(0, o.length - 1)];
    const distanceTo = (x1, y1, x2, y2) =>
      Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const shouldDraw = (x, y) => distanceTo(x1, y1, x, y) >= dist_to_draw;

    const addStr = (x, y) => {
      const str = document.createElement("div");
      str.innerHTML = "&#10022;";
      str.className = "star";
      str.style.top = `${y + rand(-20, 20)}px`;
      str.style.left = `${x}px`;
      str.style.color = selRand(colors);
      str.style.fontSize = selRand(fsize);
      document.getElementById("mouse-trail").appendChild(str);

      const fs = 10 + 5 * parseFloat(getComputedStyle(str).fontSize);
      str.animate(
        {
          translate: `0 ${y + fs > vh ? vh - y : fs}px`,
          opacity: 0,
          transform: `rotateX(${rand(1, 500)}deg) rotateY(${rand(1, 500)}deg)`,
        },
        {
          duration: delay,
          fill: "forwards",
        }
      );

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
  }, []);

  return (
    <>
      <div id="Awesome" className="anim750">
        <div className="reveal circle_wrapper">
       
        </div>

        <div className="sticky anim750">
          <div className="front circle_wrapper anim750">
            <div className="circle anim750"></div>
          </div>
        </div>

        <div className="sticky anim750">
          <div className="back circle_wrapper anim750">
            <div className="circle anim750"></div>
          </div>
        </div>
      </div>
      <form id="toogleform">
        <input
          type="checkbox"
          className="toggle"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <div className="curtain"></div>
      </form>
      <div className="BG">
        <div className={isDarkMode ? "dark-mode" : ""}>
          <div className="background">
            <div className="header">
              <div className="headerWrapper">
                <h6>we do</h6>
                <h1>
                  Web Design <br /> & Development
                </h1>
                <div class="tooltip-cont">
  <img className="toolimg" src="https://icones.pro/wp-content/uploads/2021/05/icone-d-information-jaune.png" alt="info-tooltip image"></img>
  <span class="tt-text"><p><strong><em>Social Media Links</em></strong> </p> 

<p>You can find my cv and social media in here.</p></span>
</div>
                <a className="button-wrapper" href="/GetinTouch">
                  <span className="dot dot-1"></span>
                  <span className="dot dot-2"></span>
                  <span className="dot dot-3"></span>
                  <span className="dot dot-4"></span>
                  <span className="dot dot-5"></span>
                  <span className="dot dot-6"></span>
                  <span className="dot dot-7"></span>
                  <span className="button bg-yellow-500 px-16 py-4 rounded-full uppercase">
                    GET IN TOUCH
                  </span>
            
                </a>

                <div id="circle" className="circle bg-yellow-500"></div>

                <div className="circle blue"></div>
                <div className="square red"></div>
                <div className="triangle green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 177.893 177.893"
                  >
                    {/* Your SVG code */}
                  </svg>
                </div>
                <div className="circle orange"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tooltipcontainer">

</div>
      <div id="mouse-trail" className="mouse-trail"></div>
      <div className="hero-img">
        <img src="//i.picsum.photos/id/880/1000/600.jpg" alt=""></img>
      </div>
      <section>
        <a href="/Thisisnottheoneyouwannalookat" className="secret">
          ...
        </a>
        <h1 className="typing-text" ref={typingTextRef}></h1>
      </section>
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
