import React from 'react'
import './SideBarList.css'
import profilepicture from '../../Image/Profile.jpg'

const SideBarList = () => {
  return (
    <React.Fragment>

        <div className='navbar-items'>

            <div className='sidebar-profile-pic'>

                <img src={profilepicture} alt=''></img>

            </div>

        </div>

    </React.Fragment>
  )
}

export default SideBarList