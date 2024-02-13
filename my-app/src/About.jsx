import React from 'react'
import Common from './Common';
import Student_tech from '../src/component/stn-tech.jpg'

const About=()=>{
  return(
  <>
   <Common 
   head1="Welcome to about page"
   Technology=" Technology"
   black="Black"
   heading2="We are the team of talented developer making websites"
   front_btn="Contact Now"
   visit="/Contact"
   imgsrc={Student_tech}
   />
    </>
    )
}
export default About;