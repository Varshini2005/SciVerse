import React from 'react';
import '../Compnents_Styles/teamStyle.css';



const TeamCompo = ({imag,name,title}) => {
  return (
    <div className='team-card'>
      <img  className='team-img' src={imag}/>
      <div className='card-text'>
          <h2 className='name'>{name}</h2>
      <h3 className='title'>{title}</h3>
      </div>
    

    </div>
  )
}

export default TeamCompo
