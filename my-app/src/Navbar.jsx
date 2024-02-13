import React from 'react'
import "./index.css"
import { NavLink  } from 'react-router-dom';

 const Navbar=()=>{
    return(
        
        <>
        <div className='container-fluid nav-bg'>
            <div className='row'>
                <div className='col-lg-10 mx-auto'>
              
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid main">
    <NavLink activeclasname="menu_active" className="navbar-brand blackt" type='text' to="/">Black Technology</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeclasname="menu_active" className="nav-link " to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeclasname="menu_active" className="nav-link" to="/About">About</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink activeclasname="menu_active" className="nav-link" to="/Service">Service</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeclasname="menu_active" className="nav-link" to="/Contact">Contact</NavLink>
        </li>
      
      </ul>
      
    </div>
  </div>
</nav>  
</div>
            </div>
        </div>
        </>
    );
 }
 export default Navbar;