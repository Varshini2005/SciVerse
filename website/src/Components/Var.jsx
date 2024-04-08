import React from 'react';
import '../Compnents_Styles/aboutUsStyle.css';
import aboutus from '../assets/aboutus.jpg'

const Var = () => {
  return (
    <div className='aboutUs-container' id='var'>
        {/* <h1 className='aboutUs-heading'>What is SciVerse?</h1> */}
        <img src={aboutus} className='aboutus-img'/>
        <div className='aboutUs-text'>
       
        <p className='aboutus-para'>
        SciVerse is more than just a community; it's a movement led by a group of enthusiastic students who are deeply committed to igniting curiosity and fostering awareness among teenagers about the vast and captivating world of science, technology, engineering, and mathematics (STEM).
        Our journey began with a shared belief in the transformative power of knowledge and the profound impact it can have on our community. Driven by this passion, we embarked on a mission to bridge the gap between scientific concepts and young minds, aiming to make STEM subjects accessible and engaging to all.
      At SciVerse, we recognize that the future belongs to those who embrace innovation and creativity. That's why we're dedicated to demystifying the complex world of engineering and inspiring the next generation of innovators, problem solvers, and changemakers.

       </p>

       <p className='aboutus-para'>Through a series of engaging workshops, interactive events, and educational outreach programs, we strive to create immersive learning experiences that captivate and inspire young minds. From hands-on experiments to thought-provoking discussions, we provide opportunities for students to explore STEM disciplines in a fun and meaningful way.        
       </p>

      </div>
    </div>
  );
};

 export default Var;
