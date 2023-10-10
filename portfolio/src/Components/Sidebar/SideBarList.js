import React from 'react'
import './SideBarList.css'
import profilepicture from '../../Image/Profile.jpg'

const SideBarList = ({expandSideBar}) => {
  return (
    <React.Fragment>

      {expandSideBar ? (
        <div className='navbar-items'>
          <div className='sidebar-profile-pic'>
            <img src={profilepicture} alt='profile photo'></img>
          </div>
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