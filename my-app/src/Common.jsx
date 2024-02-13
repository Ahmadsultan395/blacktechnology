import React from 'react'
import "./Home-page.css"
import {NavLink} from "react-router-dom"

const Common=(props)=>{
    return(<>
     <section className='homepage'>
    <div className='container-fluid nav-bg'>
      <div className='row'>
        <div className='col-lg-10 mx-auto'>
          <div className='row'>
          <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1  d-flex justify-content-center  flex-column'>
            <h1>{props.head1} <strong className='brand-name'>{props.black}<span className='brand-name-span'>{props.Technology}</span></strong></h1>
            <h4 className='my-3'>{props.heading2}</h4>
            <div className='mb-3 btn-start'>
            <NavLink  className='btn-get-started' to={props.visit}>{props.front_btn}</NavLink>
            </div>
          </div>
          <div className='col-lg-6 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-end align-items-center front-img'>
            <img src={props.imgsrc} alt="image front" />
          </div>
          </div>
        </div>
      </div>
    </div>
    </section>

    </>)
}

export default Common;