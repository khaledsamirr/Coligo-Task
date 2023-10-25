import React, { useState} from 'react'
import Card from '../Card/Card';
import { BookRounded, LockClock} from '@mui/icons-material';
import './rightbar.scss'
import axios from "axios";




function RightBar() {

  const [quizzes, setQuizzes]=useState([]);
  

  React.useEffect(() => {
    axios.get('http://localhost:8800/api/quiz').then((response) => {
      setQuizzes(response.data);
      
    });

   
  }, []);
  
  return (
    <div className='right-bar'>
    
          <div className='rightbar-top'>
              <h3>What's due</h3>
              <button>All</button>
              
          </div>
          <div className='middle'><p>Semester update will be notified</p></div>
          <div className='menu'>
            <ul className='rightbarlist'>
                {quizzes.map((quiz,key)=>{
                    return(
                      <li className='row' key={key}>
                        <Card
                          icon={quiz.isAssignment?<BookRounded style={{color:"#61c1b8"}}/>:<LockClock style={{color:"#61c1b8"}}/>}
                          topic={quiz.topic}
                          title={quiz.title}
                          buttonTitle={quiz.isAssignment?"Solve Assignment":"Start Quiz"}
                          course={quiz.course}
                          dueTo={quiz.dueTo}
                        />
                     </li> 
                    )
                    })}
            </ul>
        </div>
    </div>
  )
}

export default RightBar