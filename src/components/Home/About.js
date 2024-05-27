import React from 'react';
import '../../style/About.css'; // Assuming you have a CSS file for About section
import logo from "../../assets/Image/logo.png"
import SVG from "../../assets/SVG/mail.svg"

const About = () => {
  return (
<>
<section class="about-me" id="about-me">
  <div class="container">
    <div class="about-me-container">
      <div class="about-me-title">
        About <br></br> Nirajan Gautam
      </div>

      <div class="about-me-flex-container">
        <div class="about-me-image">
          <div class="back-div"></div>
          <div class="black-image"><img src="https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/313429930_3434326163468098_302690643224032631_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF_XL_1EniAtLO_qfVdNyv4eEtG2GOQZ7h4S0bYY5BnuKGqPvlAGlJvR90u81PCa2Q5C-9tY8PbCjDFpdeVqqtA&_nc_ohc=THtBH5jrq98Q7kNvgGlfYB3&_nc_ht=scontent.fktm10-1.fna&oh=00_AYCq9NNViJs4Mi0YUdNwCF7E5rxysIMyaGJmJW_1EJ0lgA&oe=6653696C" alt="black"></img></div>
          <div class="main-image"><img src="https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/313429930_3434326163468098_302690643224032631_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF_XL_1EniAtLO_qfVdNyv4eEtG2GOQZ7h4S0bYY5BnuKGqPvlAGlJvR90u81PCa2Q5C-9tY8PbCjDFpdeVqqtA&_nc_ohc=THtBH5jrq98Q7kNvgGlfYB3&_nc_ht=scontent.fktm10-1.fna&oh=00_AYCq9NNViJs4Mi0YUdNwCF7E5rxysIMyaGJmJW_1EJ0lgA&oe=6653696C" alt="smit"></img></div>
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
