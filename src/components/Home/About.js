import React from 'react';
import '../../style/About.css'; // Assuming you have a CSS file for About section
import logo from "../../assets/Image/logo.png"
import SVG from "../../assets/SVG/mail.svg"
import profile from "../../assets/Image/profile.jpg"
import BWprofile from "../../assets/Image/BWprofile.jpg"

const About = () => {
  return (
<>
<section class="about-me" id="about-me">
  <div class="AboutClasscontainer">
    <div class="about-me-container">
      <div class="about-me-title">
        About <br></br> Nirajan Gautam
      </div>

      <div class="about-me-flex-container">
        <div class="about-me-image">
          <div class="back-div"></div>
          <div class="black-image"><img src={BWprofile} alt="black"></img></div>
          <div class="main-image"><img src={profile} alt="smit"></img></div>
        </div>
        <div class="about-me-content">

          <div class="logo"><img className='aboutlogo' src={logo} alt="smit"></img></div>

          <div class="text">
          Crafting beauty from simplicity, Nirajan brings innovation to life. With a keen eye for detail, he turns concepts into captivating creations, making the ordinary exceptional.
          </div>
        </div>
      </div>

      <div class="mail-button mail-button2">
        
        <a href="mailto:Nirajangautamworks@gmail.com"><img src={SVG} alt="mail"></img></a>
      </div>

    </div>

  </div>
</section>

</>
  )
};

export default About;
