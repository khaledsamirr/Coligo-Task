import React from 'react'
import './card.scss'
function Card({icon,title,course, topic, dueTo, buttonTitle}) {

  return (
    <div className='card'>
        <div className='card-top'>
            {icon}
            <h3>{title}</h3>
        </div>
        <div className="card-bottom">
            <p> Course: {course}</p>
            <p> Topic: {topic}</p>
            <p> Due to: {dueTo}</p>
            <button className='button-outline'>{buttonTitle}</button>
        </div>
        

    </div>
  )
}

export default Card