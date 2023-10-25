import { Link } from "react-router-dom"
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
        <div className='card'>
          <div className='left'>
              <h1>Welcome to Coligo..</h1>
              <p>Login to continue...</p>
          </div>
          <div className='right'>
            <h1>Login</h1>
            <Link to={"/"}>
              <button onClick={()=>{localStorage.setItem("loggedin", true)}} className="button-primary">
                  Login
              </button>
            </Link>
          </div>

        </div>
        
      </div>
  )
}

export default Home