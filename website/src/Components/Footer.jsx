import React from 'react';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter-x.svg';
import '../Compnents_Styles/footerStyle.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>© 2024 SciVerse. All rights reserved.</p>
      <ul className='list'>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
      <ul>

        <a href='' target="_blank" rel="noopener noreferrer"> <li><img src={instagram} alt="Instagram" className='icon'  /></li> </a>
        <a href='https://www.linkedin.com/company/99134919/admin/feed/posts/' target="_blank" rel="noopener noreferrer"> <li><img src={linkedin} alt="LinkedIn" className='icon' /></li> </a>
        <a href='https://www.facebook.com/profile.php?id=61558166822680' target="_blank" rel="noopener noreferrer"><li><img src={facebook} alt="Facebook" className='icon'  /></li></a>
        <a href='https://twitter.com/sciVerse23' target="_blank" rel="noopener noreferrer"> <li><img src={twitter} alt="Twitter" className='icon' /></li> </a>
       
      </ul>
    </footer>
  );
}

export default Footer;

