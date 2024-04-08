import React from 'react';
import gallery_pic1 from '../assets/gallery_pic1.jpg';
import gallery_pic2 from '../assets/gallery_pic2.jpg';
import gallery_pic3 from '../assets/gallery_pic3.jpg';
import '../Compnents_Styles/galleryStyle.css'


const Gallery = () => {
  return (
    <>
    <div className='gallery' id='gallery'>
      <div className='photo'>
       <img  className='p1' src={gallery_pic1}/>
      </div>
      <div className='photo'>
       <img   className='p1' src={gallery_pic2}/>
      </div>
      <div className='photo'>
       <img  className='p1' src={gallery_pic3}/>
      </div> </div>
      {/* <button className='dark-btn gallery-button'>See More</button> */}
   </>
   
  )
}

export default Gallery
