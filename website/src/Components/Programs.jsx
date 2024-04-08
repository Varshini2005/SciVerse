import React from 'react'
import cat from "../assets/cat.jpg"
import '../Compnents_Styles/programStyle.css'

const Programs = () => {
  return (
    <div className='Programs'>
      
      <div className='program'>
        <img  src={cat} />  
        <div className='caption'>
        <h1>Varshini Gopi</h1>
        </div>  
         </div>
         <div className='program'>
        <img  src={cat} />  
        <div className='caption'>
        <h1>Varshini Gopi</h1>
        </div>    
         </div>
         <div className='program'>
        <img  src={cat} />   
        <div className='caption'>
        <h1>Varshini Gopi</h1>
        </div>   
         </div>


    </div>
  )
}

export default Programs;
