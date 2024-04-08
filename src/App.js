import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
// import aboutUs from './Components/AboutUs';
import Var from './Components/Var';
import Team from './Components/Team'
import Title from './Components/Title';
import Programs from './Components/Programs';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Blogs from './Components/Blogs';

export default function App() {
    return (
        <>
            <NavBar />
            <Hero/>
<div className='container'>
<Title heading='What is SciVerse?' />
            <Var/>
   
            <Title heading='Blogs' />
            <Blogs/>

            {/* <Title heading='Programs'/>
            <Programs/> */}
             
            <Title heading='Gallery'/>
            <Gallery/>

            <Title heading='Team'/>
            <Team/>

           <Title heading='Contact-Us'/>
           <Contact/>
            
</div>
<Footer/>
        </>
    );
}

