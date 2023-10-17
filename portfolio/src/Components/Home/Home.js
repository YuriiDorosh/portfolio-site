import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { Link } from "react-scroll";


const Home = ({theme, changeTheme}) => {
  return (
    <div className="container-fluid home" id="home">

      <div className="theme-change" onClick={changeTheme}>
        {theme === 'light' ? (<p><BsFillMoonFill size={40} /></p>): (<p className="sun-theme-icon"><BsFillSunFill size={40} /></p>)}

      </div>

      <div className="container home-content">
        <h1>Hi I'm Yurii</h1>
        <h3>
          <Typewriter
            options={{
              strings: [
                "Python Developer",
                "Web Developer",
                "Just Programmer",
              ],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </h3>

        <div className="button-for-action">
          <div className="hire-me-button"><Link to="contact" spy={true} offset={-200}>Hire me</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Home;