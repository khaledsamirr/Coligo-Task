import React, { useState } from 'react'
import './announcement.scss'
import axios from "axios";


function Announcement({userId,title, announcement}) {

  const [user, setUser]=useState("");
  

  React.useEffect(() => {
    console.log(userId)
    axios.get(`http://localhost:8800/api/user/${userId}`).then((response) => {
      setUser(response.data);
      console.log(response.data)
    });

   
  }, [userId]);


  return (
    <div className='announcement'>
      <img src={user.img} alt=""/>
      <div className="info">
        <h6>{user.username}</h6>
        <p>{title}</p>
      </div>
      <p>{announcement}</p>        

    </div>
  )
}

export default Announcement