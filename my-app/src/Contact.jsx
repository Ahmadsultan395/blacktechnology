import React, { useState,useRef } from 'react'
import "./Contact.css";


const Contact=()=>{
const [data,setdata]=useState({
  name:"",phone:"",email:"",message:""
});

const EventSubmit=(e)=>{
  // console.log(e)
const name=e.target.name;
const value=e.target.value;

setdata({...data,[name]:value});
}

const saveSubmit=(e)=>{
  e.preventDefault();
}

const infoRef = useRef(null);

const showInformation = () => {
  if (infoRef.current) {
    infoRef.current.style.display = 'flex';
  }
}

  return(
    <>
    <div className='my-5'>
      <h1 className='text-center'>Contact Us</h1>
    </div>
    <div className='container mb-5'>
      <div className='row'>
        <div className='col-md-6 col-10 mx-auto'>
          
          <form action="" method='post' onSubmit={saveSubmit}>
          <div className="mb-3">
  <label  className="form-label" htmlFor='name'>Name</label>
  <input type="text" className="form-control" name='name' 
  value={data.name} onChange={EventSubmit} id="exampleFormControlInput1" placeholder="Enter Your Name" />
</div>
<div className="mb-3">
  <label  className="form-label" htmlFor='phone'>Phone Number</label>
  <input type="text" className="form-control" name='phone' 
  value={data.phone} onChange={EventSubmit} id="exampleFormControlInput2" placeholder="Enter Phone Number" />
</div>
<div className="mb-3">
  <label  className="form-label" htmlFor='email'>Email address</label>
  <input type="email" className="form-control" name='email' 
  value={data.email} onChange={EventSubmit} id="exampleFormControlInput3" placeholder="Enter valid mail" />
</div>
<div className="mb-3">
  <label className="form-label" htmlFor='message'>Message</label>
  <textarea className="form-control" name='message'
  value={data.message} onChange={EventSubmit} id="exampleFormControlTextarea4" rows="3" placeholder='Write a message'></textarea>
</div>
<div className="col-12">
    <button className="btn btn-outline-primary" onClick={showInformation} type="submit">Submit form</button>
  </div>
  <div className='mt-3 showinfo' ref={infoRef} style={{display:"none"}}>
  <p>My name : {data.name}<br></br>
    My Phone Number : {data.phone}<br></br>
     My Email Address :{data.email} <br /> 
     Message: {data.message}</p>
  </div>
          </form>

        </div>
      </div>
    </div>
    </>
    )
}
export default Contact;