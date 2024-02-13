import React from 'react'
import Cards from './cards';
import Carddata from './CardData';

const Service=()=>{
  return(<>

      <div className='col-lg-10 mx-auto'>
        <h1 className='text-center mb-5'>Our Service</h1>
    </div>
    <div className='container-fluid'>
    <div className='row'>
      <div className='col-md-10 mx-auto mb-5'>
        <div className='row gy-4'>
        {
          Carddata.map((value,index)=>{
            return <Cards key={index} image={value.image}
             title={value.title}
             />
          })
        }
        </div>
      </div>
    </div>
  </div>
  
  </>)
}
export default Service;