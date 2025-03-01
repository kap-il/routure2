import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Open from './pages/Open';
import {BrowserRouter as Router, useRoutes, Route} from 'react-router-dom'
import axios from 'axios'
import Merchandise from './pages/Merchandise';
import Social from './pages/Social';

axios.defaults.baseURL = 
  process.env.NODE_ENV === "production"
    ? "https://routure.vercel.app"
    : "https://localhost:3000"
  axios.defaults.withCredentials = true;

function RouteComponent(){
  const routesArray = [
    {path: "/", element: <Open/>},
    {path: "/issues", element: <Home />},
    {path: "/merch", element: <Merchandise />},
    {path: "/social", element: <Social />}
  ]

  let routesElement = useRoutes(routesArray);

  return (
    <div className='min-h-screen'>
      <div>{routesElement}
      </div>
    </div>
  )

}

  


function App() {
  return (
    <Router>
      <RouteComponent/>
    </Router>
  );
}

export default App;
