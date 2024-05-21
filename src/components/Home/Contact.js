import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import "../../style/Contact.css"; // Importing the CSS file

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const navigate = useNavigate();
  const buttonRef = useRef(null);

  useEffect(() => {
    const am = 30;

    const btn = buttonRef.current;
    let btnEl = btn.getBoundingClientRect();
    let xCenter = (btnEl.left + btnEl.right) / 2;
    let yCenter = (btnEl.top + btnEl.bottom) / 2;

    const resizeHandler = () => {
      btnEl = btn.getBoundingClientRect();
      xCenter = (btnEl.left + btnEl.right) / 2;
      yCenter = (btnEl.top + btnEl.bottom) / 2;
    };

    const mouseUpHandler = (e) => {
      const xx = xCenter;
      const yy = yCenter;

      for (let i = 0; i < am; i++) {
        createCircles(xx, yy, 0);
      }
    };

    const mouseDownHandler = () => {
      const particles = document.querySelectorAll("particle");

      if (particles.length > 0) {
        particles.forEach((part) => {
          part.remove();
        });
      }
    };

    window.addEventListener("resize", resizeHandler, true);
    btn.addEventListener("mouseup", mouseUpHandler);
    btn.addEventListener("mousedown", mouseDownHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler, true);
      btn.removeEventListener("mouseup", mouseUpHandler);
      btn.removeEventListener("mousedown", mouseDownHandler);
    };
  }, []);

  const HandleContact = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: Name,
      from_email: Email,
      message: Message,
    };

    emailjs
      .send(
        "service_d5t73ko", // Replace with your EmailJS service ID
        "template_830aoe8", // Replace with your EmailJS template ID
        templateParams,
        "vd2KgeAFyaaYEtnq_" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Email sent successfully!");
        navigate("/");
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
      });
  };

  const handleButtonClick = () => {
    // Play sound

    // Trigger animation
    buttonRef.current.classList.add("animate-button");
    setTimeout(() => {
      buttonRef.current.classList.remove("animate-button");
    }, 1000); // Duration of the animation
  };

  const createCircles = (x, y, tuSam) => {
    const am = 30;
    for (let i = 0; i < am; i++) {
      setTimeout(() => {
        // Delay each particle creation

        const particle = document.createElement("particle");
        const size = Math.floor(Math.random() * 45);
        const xPos = x + (Math.random() - 0.5) * tuSam * 15;
        const yPos = y + (Math.random() - 0.5) * tuSam * 15;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.top = `${yPos}px`;
        particle.style.left = `${xPos}px`;

        document.body.appendChild(particle);

        const destinationX = xPos + (Math.random() - 0.5) * tuSam * 15;
        const destinationY = yPos + (Math.random() - 0.5) * tuSam * 15;

        const animation = particle.animate(
          [
            {
              transform: `translate3d(${xPos}px, ${yPos}px, 0)`,
              opacity: 1,
            },
            {
              transform: `translate3d(${destinationX}px, ${destinationY}px, 0)`,
              opacity: 1,
            },
          ],
          {
            duration: 400 + Math.random() * 1500,
            easing: "ease-out",
            delay: Math.random() * 100,
          }
        );

        animation.onfinish = () => {
          particle.remove();
        };
      }, i * 10); // Adjust the interval between each particle creation
    }
  };

  return (
    <section id="contact-form" className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h1>Contact Us</h1>
          <h2>Got a problem to solve?</h2>
          <p>
            Ready to launch your next big idea? Share your vision with us and
            let's create the website of your dreams.
          </p>
        </div>
        <div className="contact-right">
          <form
            onSubmit={HandleContact}
            autoComplete="off"
            className="contact-form"
          >
            <input
              type="text"
              className="contact-input"
              placeholder="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              className="contact-input"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              className="contact-input"
              placeholder="Message"
              rows="5"
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            {/* Replace the existing button with the provided HTML */}
            <a
              className="email-link inline-flex items-center text-neutrals-300 transition-colors hover:text-neutrals-50 focus-visible:text-neutrals-50"
              href="mailto:nirajangautamworks@gmail.com"
              title="Hit me up"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="me-2 inline size-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"></path>
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"></path>
              </svg>
              nirajangautamworks@gmail.com
            </a>
            <div
              className="btn flex justify-center items-center"
              onClick={handleButtonClick}
              ref={buttonRef}
            >
              <p>hit me up</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
            {/* End of replacement */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
