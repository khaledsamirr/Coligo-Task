import React from 'react'
import './examsCard.scss'

function ExamsCard() {
  return (

    <div className='examcard'>
        
        <div className='examleft'>
          <h1> EXAMS TIME </h1>
          <p>Here we are, Are you ready to fight? Don't worry, we prepared some tips to be ready for your exams</p>
          <p className='p-exam'>"Nothing happens untill something moves" - Albert Einstien </p>
          <button className='button-primary'>View exams tips</button>
        </div>
        <div className='examright'>
          <div className='img'>
           
          </div>
          
          
        </div>
    </div>
  )
}

export default ExamsCard