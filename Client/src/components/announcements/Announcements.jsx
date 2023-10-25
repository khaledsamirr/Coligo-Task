import React, {useState } from 'react'
import './announcements.scss'
import Announcement from '../Announcement/Announcement';

import axios from 'axios';



function  Announcements () {

  
  const [announcements, setAnnouncements]=useState([]);
  

  React.useEffect(() => {
    axios.get('http://localhost:8800/api/announcement').then((response) => {
      setAnnouncements(response.data);
      console.log(response.data)
    });

   
  }, []);
  


  return (

    <div className='announcements'>
    
          <div className='announcements-top'>
              <h3>Announcements</h3>
              <button>All</button>
          </div>
          <div className='middle'><p>Announcements update will be notified</p></div>
          <div className='menu'>
            <ul className='announcementslist'>
                {announcements.map((a,key)=>{
                    return(
                      <li className='row' key={key}>
                        <Announcement
      
                          title={a.title}
                          userId={a.userId}
                          announcement={a.announcement}

                        />
                     </li> 
                    )
                    })}
            </ul>
        </div>
    </div>
  )
}

export default Announcements