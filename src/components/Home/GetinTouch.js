import React, { useEffect } from "react";
import "../../style/GetinTouch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import CV from "../../assets/Docx/CV.docx";

const GetInTouch = () => {
  useEffect(() => {
    const hero = document.querySelector('[data-hero]');

    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

      gsap.to(hero, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.3,
        ease: 'sine.out',
      });
    });
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'CV.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const countDownToBirthday = () => {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

      let today = new Date(),
          dd = String(today.getDate()).padStart(2, "0"),
          mm = String(today.getMonth() + 1).padStart(2, "0"),
          yyyy = today.getFullYear(),
          nextYear = yyyy + 1,
          dayMonth = "05/05/",
          birthday = dayMonth + yyyy;

      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }

      const countDown = new Date(birthday).getTime();
      const x = setInterval(function() {    
        const now = new Date().getTime();
        const distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day));
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
      }, 0);
    };

    countDownToBirthday();
  }, []);

  return (
    <>
      <div class="wrapper">
        <div class="hero">
          <p class="hero__heading" onClick={handleDownloadCV}>Download CV</p>
        </div>
        <div class="hero hero--secondary" aria-hidden="true" data-hero>
          <div class="Apostion">
            <a
              href="#"
              class="header__btn"
              target="_blank"
              title="Check On Github"
              onClick={handleDownloadCV}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="unique-mid">
        <a className="unique-btn unique-fb" href="#">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className="unique-btn unique-ytb" href="#">
          <FontAwesomeIcon className="i" icon={faYoutube} />
        </a>
        <a className="unique-btn unique-tw" href="#">
          <FontAwesomeIcon className="i" icon={faLinkedin} />
        </a>
        <a className="unique-btn unique-ig" href="#">
          <FontAwesomeIcon className="i" icon={faInstagram} />
        </a>
      </div>

      {/* Footer Area */}
      <footer className="footer">
        <div class="Bdaycontainer">
          <h1 id="headline">Countdown to my birthday</h1>
          <div id="countdown">
            <ul>
              <li className="birthdayli"><span id="days"></span>days</li>
              <li className="birthdayli"><span id="hours"></span>Hours</li>
              <li className="birthdayli"><span id="minutes"></span>Minutes</li>
              <li className="birthdayli"><span id="seconds"></span>Seconds</li>
            </ul>
          </div>
          <div id="content" class="emoji">
            <span>🥳</span>
            <span>🎉</span>
            <span>🎂</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GetInTouch;
