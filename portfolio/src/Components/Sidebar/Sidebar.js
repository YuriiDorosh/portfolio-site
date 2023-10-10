import React, { useState } from 'react';
import "./Sidebar.css";
import Home from '../Home/Home';
import { BsChevronLeft, } from "react-icons/bs";
import { BsChevronRight, } from "react-icons/bs";
import SideBarList from './SideBarList';

const Sidebar = () => {

    const [expandSideBar, setExtandSideBar] = useState(true);
    const handleClick = () => {
        setExtandSideBar(!expandSideBar);   
    }


  return (
    <div className="container-fluid sidebar-section">

        <div className={expandSideBar? 'sidebar-expand sidebar': 'sidebar'}>

            <div className='icon-for-sidebar-expand-and-collapse'>
                <p onClick={handleClick}>
                    {expandSideBar ? (
                        <BsChevronLeft size={30}/>
                    ): (
                        <BsChevronRight size={30}/>
                    ) }
                </p>
            </div>
            <SideBarList expandSideBar={expandSideBar} />
     

        </div>


        <div className='container'>
            <Home/>
            
        </div>

    </div>
  )
}

export default Sidebar