import { useState } from "react";
import React from 'react';
import "../Compnents_Styles/blogStyle.css";

const BlogsCompo =({title,text,maxlength}) => {



   const [showText, setFullText] =useState(false); 
    const toggleText = () => {
    setFullText(!showText);
  };
    return (
    
      <div className='blog' id='blog'>
       <h2 className='blog-title'>{title}</h2>
       <p className='blog-text'>
       {showText ? text : `${text.slice(0, maxlength)}...`}</p>
      {text.length > maxlength && (
        <button onClick={toggleText} className="dark-btn blog-btn">
          {showText ? 'Read Less' : 'Read More'}
        </button>
      )}
      </div>
    
  )
}

export default BlogsCompo;
