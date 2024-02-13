import React from 'react'
import Common  from './Common';
import  Rocket_boy from "../src/component/rocketBoy.jpg";

const Home=()=>{
  return(
    <>
   <Common 
   head1="Grow your business with"
   Technology=" Technology"
   black="Black"
   heading2="We are the team of talented developer making websites"
   front_btn="Get Started"
   visit='/Service'
   imgsrc={Rocket_boy}
   />
    </>
  )
}
export default Home;