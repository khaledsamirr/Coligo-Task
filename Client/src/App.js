
import './App.scss';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import { createBrowserRouter,RouterProvider,Navigate } from 'react-router-dom';


function App() { 


  const RequireAuth=({children})=>{
    if(!localStorage.getItem("loggedin")){
      return <Navigate to="/home"/>
    }
    return children;
  }
  const router= createBrowserRouter([

    {
      path:"/",
       element:(<RequireAuth><Dashboard/></RequireAuth>),
    },

    {
      path:"/home",
      element:<Home/>
    }
  ]);


  return (
      <div>
          <RouterProvider router={router}/>
         
        
    
      </div>
  );
}

export default App;
