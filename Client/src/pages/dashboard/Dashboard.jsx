import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import Announcements from '../../components/announcements/Announcements'
import RightBar from '../../components/rightbar/RightBar'
import ExamsCard from '../../components/exams-card/ExamsCard'
import './dashboard.scss'
function Dashboard() {
  return (
    <div className='dashboard' >
        <div className='left'><SideBar/></div>
        <div className='right' style={{flexDirection:'column'}}>
            <NavBar/>
            <ExamsCard/>
            <div className='bottom'>
                <div className='announcement'><Announcements/></div>
                <div className="rightbar"><RightBar/></div>
            </div>
            
        </div>

    </div>
  )
}

export default Dashboard