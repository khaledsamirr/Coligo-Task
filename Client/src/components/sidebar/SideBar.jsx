import React from 'react'
import './sidebar.scss';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import CampaignIcon from '@mui/icons-material/Campaign';
import { Class } from '@mui/icons-material';


function SideBar() {

    const routes = [
        {
          label: 'Dashboard',
          icon: <HomeIcon/>,
          href: '/',
        },
        {
          label: 'Schedule',
          icon: <CalendarMonthIcon/>,
          href: '/schedule',
        },
        {
          label: 'Courses',
          icon: <Class/>,
          href: '/courses',
        },
        {
          label: 'Gradebook',
          icon: <SchoolIcon/>,
          href: '/gradebook',
        },
        {
          label: 'Performance',
          icon: <KeyboardDoubleArrowUpIcon/>,
          href: '/performance',
        },
        {
          label: 'Announcement',
          icon : <CampaignIcon/>,
          href: '/announcement',
        },
      ];
      
  return (
    <div className='sidebar'>
        <h1>Coligo</h1>
        <div className='menu'>
            <ul className='sidebarlist'>
                {routes.map((route,key)=>{
                    return(
                       <li id={window.location.pathname===route.href?"active":""} className='row'onClick={()=>{window.location.pathname=route.href}}key={key}>
                        <div>{route.icon}</div>
                        <div className='label'>{route.label}</div>
                       </li> 
                    )
                    })}
            </ul>
        </div>
    </div>
  )
}

export default SideBar