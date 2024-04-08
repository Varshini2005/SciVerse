import React from 'react';
import TeamCompo from '../Components/TeamCompo';
import varshiniImage from '../assets/varshini2.jpg';
import meghanaImage from '../assets/meghana.jpg';
import nikithaImage from '../assets/nikitha.jpg';
import vasaviImage from '../assets/vasavi.jpg';
import umaImage from '../assets/uma.jpg';
import sumImage from '../assets/sumitha2.jpg'
import '../Compnents_Styles/teamStyle.css';


const Team = () => {
  return (
    <>
    <div className='team-container' id='team'>
      {/* <h1 className='team-heading'>Team</h1> */}
      <TeamCompo  className='founder'
        imag={varshiniImage} 
        name='Varshini Gopi' 
        title='Founder'
      /> </div>
      <div className='team-container-2'>
       <TeamCompo
        imag={meghanaImage} 
        name='Meghana Korimi' 
        title='COO'
      />
       <TeamCompo
        imag={nikithaImage} 
        name='Nikitha Mantri' 
        title='Media Handler'
      />
        <TeamCompo
        imag={vasaviImage} 
        name='Vasavi Yarra' 
        title='Content Team Lead'
      />
        <TeamCompo
        imag={umaImage} 
        name='UmaSri Vuppala' 
        title='Organiser'
      />
         <TeamCompo
        imag={sumImage} 
        name='Sumitha SreeKumar' 
        title='Organiser'
      />
</div>
    </>
  );
};

export default Team;

