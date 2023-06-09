import React, { useState } from 'react';
import {IoIosClose} from "react-icons/io";



function Header() {

 const [changeHeader, setChangeHeader] = useState(false);

  const changeHeaderColor = () => {
    if(window.scrollY >= 50){
    setChangeHeader(true)
  }
  else {
    setChangeHeader(false)
  }
}

  window.addEventListener('scroll', changeHeaderColor)
  return (
    <header className={`header ${changeHeader && 'scroll-header'}`} style={{backgroundColor: '#000'}}id='header'>
        <nav className='nav container'>
          <a href='#home' className='nav__logo'>H<span className='logo-O'>O</span>BBS</a>
          <div className='nav__menu' id='nav-menu'>
            <ul className='nav__list'>
            <li className='nav__item'><a href='#home' className='nav__link active-link'>Home</a></li>
            <li className='nav__item'><a href='#products' className='nav__link active-link'>Menu</a></li>
           
            <li className='nav__item'><a href='#contact' className='nav__link active-link'>Contact</a></li>
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