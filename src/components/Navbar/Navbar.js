import React from 'react'
import logo from '../../img/logo.jpg';
import '../Navbar/Navbar.scss';
export default function Navbar() {
    return (
       <nav className="navbar">
           <img src={logo} alt="travl company logo" height="80px" width="100px"/>
           <ul className='nav-links'>
             <li>
                 <a href="/" className='nav-link'>
                     Home
                 </a>
             </li>
             <li>
                 <a href="/" className='nav-link'>
                     About
                 </a>
             </li>
             <li>
                 <a href="/" className='nav-link'>
                     Tours
                 </a>
             </li>
           </ul>
       </nav>
    )
}
