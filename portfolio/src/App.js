import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import About from "./Components/About/About";
import TechStack from './Components/TechStack/TechStack';
import Project from "./Components/Project/Project";
import Education from "./Components/Education/Education";


const App = () => {
  return (
    <>
    <Sidebar></Sidebar>
    <About />
    <TechStack />
    <Education />
    <Project />
    </>
  )
}

export default App