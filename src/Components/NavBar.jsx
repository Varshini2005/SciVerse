import React, { useState } from 'react';
import '../Compnents_Styles/navBarStyle.css'; // Fixed import path
import final_logo from '../assets/final_logo.png'; // Fixed import path
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';



const NavBar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu= () =>
  {
    // mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    setMobileMenu(!mobileMenu); 
  }
  return (
    <nav className='navbar'> 
          <li><Link to='hero' smooth={true} offset={-260} duration={500}>
          <img src={final_logo} alt='logo' className='logo'/>
          </Link></li>

    <ul style={{ right: mobileMenu ? '0' : '-200px' }}>
     
      <li><Link to='hero' smooth={true} offset={-260} duration={500}>Home</Link></li>
        <li><Link to='var' smooth={true} offset={-200} duration={500}>About Us</Link></li>
        <li><Link to='blog' smooth={true} offset={-200} duration={500}>Blogs</Link></li>
        <li><Link to='gallery' smooth={true} offset={-200} duration={500}>Gallery</Link></li>
        <li><Link to='team' smooth={true} offset={-190} duration={500}>Team</Link></li>
        <li><Link to='contact' smooth={true} offset={-170} duration={500} className='btn'>Contact-Us</Link></li> {/* Removed 'className' */}
      </ul>
   {/* <img src={FaBars} alt ="" className="menu-icon" />   */}
   <FaBars className='menu-icon' style={{ color: 'white' }}
    onClick={toggleMenu}
   />
     </nav>
  );
}

export default NavBar;

