import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import './navbar.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function NavBar() {

  const [open,setOpen]=useState(false);



  return (
    <div className='navbar'>
  
      
        <div className="navleft">
            <h1>Welcome Talia,</h1>
        </div>
        <div className="navright">
            <div className="search">
                <SearchIcon style={{marginLeft:'5px'}}/>
                <input type="text" placeholder="Search"/>
            </div>
           
            <div className='icon'>
               <NotificationsIcon style={{color:'#61c1b8', width:'30px', height:'30px'}}/>
               <div className='counter'>1</div>
            </div>
            <div className='icon'>
                <EmailIcon style={{color:'#61c1b8', width:'30px', height:'30px'}}/>
                <div className='counter'>3</div>
            </div>
           
            <div className='user'>
            <img onClick={()=>setOpen(!open)}src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            {
              open&&
              <div className='dropdown'>
                  <ul>
                    <Link to={"/home"}>
                    <li onClick={()=>{localStorage.setItem("loggedin", false)}}>Logout</li>
                    </Link>
                  </ul>
              </div>
            }

            </div>
        </div>
    </div>
  )
}

export default NavBar