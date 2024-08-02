import React from 'react';
import './navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
          <h1>Web<span>Dev.</span></h1>
        <div className='desktopMenu'>
           <Link className='desktopMenuListItem'>HOME</Link>
           <Link className='desktopMenuListItem'>CLIENTS</Link>
           <Link className='desktopMenuListItem'>ABOUT</Link>
           <Link className='desktopMenuListItem'>PORTFOLIO</Link>
           <Link className='desktopMenuListItem'>PORTFOLIO</Link>
        </div>
       <button className='desktopMenuBtn'>
         <img src="" alt='' className='desktopMenuImg'/>
         Contact Me
       </button>

    </nav>
  )
}

export default Navbar
