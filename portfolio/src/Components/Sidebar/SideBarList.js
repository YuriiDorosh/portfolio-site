import React from 'react';
import './SideBarList.css';
import profilepicture from '../../Image/Profile.jpg';
import {
  FcHome,
  FcNightPortrait,
  FcTodoList,
  FcContacts,
} from "react-icons/fc";
import { MdBiotech } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { Link } from "react-scroll";


const SideBarList = ({expandSideBar}) => {
  return (
    <React.Fragment>

      {expandSideBar ? (
        <div className='navbar-items'>
          <div className='sidebar-profile-pic'>
            <img src={profilepicture} alt='profile photo'></img>
          </div>

          <ul>
            <li className="nav-item">
              <Link to="home" spy={true}>
                <FcHome size={25} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" spy={true} offset={-350}>
                <FcNightPortrait size={25} /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="techstack" spy={true} offset={-350}>
                <MdBiotech color="orange" size={25} /> Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link to="education" spy={true} offset={-350}>
                <MdCastForEducation size={25} color="yellow" /> Education
              </Link>
            </li>
            <li className="nav-item">
              <Link to="project" spy={true} offset={-350}>
                <FcTodoList size={25} /> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" spy={true} offset={-450}>
                <FcContacts size={25} /> Contacts
              </Link>
            </li>
          </ul>

        </div>
      ): 
      (
        <div>

        </div>
      )}



    </React.Fragment>
  )
}

export default SideBarList