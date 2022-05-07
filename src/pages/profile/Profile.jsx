import './profile.scss'
import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'

const Profile = () => {
  return (
    <div className="profile">
      <Sidebar />
      <div className="proContainer">
        <Navbar />
        <rect
          fill="#ffffff"
          class="highcharts-background"
          x="0"
          y="0"
          width="668"
          height="400"
          rx="0"
          ry="0"
        ></rect>
      </div>
    </div>
  )
}

export default Profile
