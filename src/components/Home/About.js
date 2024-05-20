import React from 'react';
import '../../style/About.css'; // Assuming you have a CSS file for About section

const About = () => {
  return (
    <section id="About" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/313429930_3434326163468098_302690643224032631_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF_XL_1EniAtLO_qfVdNyv4eEtG2GOQZ7h4S0bYY5BnuKGqPvlAGlJvR90u81PCa2Q5C-9tY8PbCjDFpdeVqqtA&_nc_ohc=zJ_58Uci95EQ7kNvgEgZYRC&_nc_ht=scontent.fktm10-1.fna&oh=00_AYBiL13WtfHdfLOopGRhqK9yN507OxJH_eNz_ZVBx5nXfw&oe=664FE56C" alt="About" className="img-fluid about-image" />
          </div>
          <div className="col-md-6 text-white">
            <span className="tag">ABOUT</span>
            <h2 className="about-title">Developer</h2>
            <p className="about-description">
              I am Nirajan, a passionate freelancer from Kathmandu, Nepal and the founder of NirajanGautamWorks, bringing you web development and design from the future. My expertise is developing next-level websites and web applications including full frontend design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
