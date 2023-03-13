import React from 'react';
import {IoIosClose} from "react-icons/io";

function Header() {
  return (
    <header className='header' style={{backgroundColor: '#000'}}id='header'>
        <nav className='nav container'>
          <a href='#home' className='nav__logo'>H<span className='logo-O'>O</span>BBS</a>
          <div className='nav__menu' id='nav-menu'>
            <ul className='nav__list'>
            <li className='nav__item'><a href='#home' className='nav__link active-link'>Home</a></li>
            <li className='nav__item'><a href='#menu' className='nav__link active-link'>Menu</a></li>
            <li className='nav__item'><a href='#location' className='nav__link active-link'>Location</a></li>
            <li className='nav__item'><a href='#about' className='nav__link active-link'>About</a></li>
            </ul>
            <div className='nav__close' id = "nav-close">
              <IoIosClose className='bx bx-x'/>
            </div>

          </div>
          </nav> 
    </header>
  )
}

export default Header