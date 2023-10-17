import React from "react";

// import Fade from 'react-reveal/Fade';

import "./About.css";
import ProfilePicture from "../../Image/Profile.jpg";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={ProfilePicture} alt="Profile thumbnail" />
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
            {/* <Fade top> */}
              <h5>About Me</h5>
              <span className="line"></span>
              {/* </Fade> */}
            </div>
            {/* <Fade bottom> */}
            <p>
            I am actively exploring Python, particularly its libraries and frameworks.
            <br></br>
            My experience spans a range of projects, including web applications using:<br></br> Django, DRF,
            Django Ninja, FastAPI,<br></br>
            desktop applications with<br></br> Tkinter and CustomTkinter,<br></br>
            Telegram bots using aiogram2,<br></br>
            web scraping powered by BeautifulSoup and Selenium,<br></br>
            and automation scripts.<br></br>
            Additionally, I have experience in programming microcontrollers with MicroPython.<br></br><br></br>
            My skill set extends to basic DevOps capabilities,<br></br>
            including Linux proficiency,<br></br>
            deploying Telegram bots using Docker and daemon processes,<br></br>
            and writing Bash scripts for backup purposes.<br></br><br></br>
            I have small non-commercial teams experience,
            I served as the lead developer on a Django templates website project<br></br>
            and as a DevOps engineer,<br></br> deploying a Telegram bot on a VPS,
            creating daemon files, Docker files, Bash scripts,
            and managing the project repository on GitHub.<br></br><br></br>
            In my short experience, I have worked with various databases,<br></br>
            primarily PostgreSQL, SQLite, and
            MongoDB (in conjunction with FastAPI).
            </p>
            {/* </Fade> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;