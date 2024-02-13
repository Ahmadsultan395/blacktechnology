import React from 'react'
import {Routes,Route,RouterProvider} from  "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Service from "./Service"
import Navbar from "./Navbar"
import Footer from './Footer';



const App=()=>{
return(
  <>
<Navbar/>

  <Routes>
<Route exact path='/' Component={Home}  />
<Route exact path='/About' Component={About}  />
<Route exact path='/Service' Component={Service}  />
<Route exact path='/Contact' Component={Contact}  />
{/* <Redirect to="/" /> */}
  </Routes>
  <Footer />
  </>
)
}
export default App;