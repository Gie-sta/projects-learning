import React from 'react';
import { NavLink, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { showMobileMenu, defineBodyBackground } from '../store/actions';
import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';



import './Navbar.scss'

const Navbar = () => {


  const bacgroundImg = useSelector((state) => state.backgroundReducer.background)
  console.log(bacgroundImg);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showMobileMenu());
  };

  const defineBackground = (background) => {
    console.log(background);
    dispatch(defineBodyBackground(background));
    console.log(background);
  }
  const image = (bacgroundImg) => {
    if (bacgroundImg) {
      console.log(bacgroundImg)
    } else {
      bacgroundImg = 'home';
      console.log(bacgroundImg);
    }
  }
  image(bacgroundImg);
  return (
    //   <div className='navbar'>

    <nav className='navbar-container'>
      <Link to="/"  > <img src={logo} alt="logo" className='logo-image' onClick={() => defineBackground('home')} /></Link>
      <hr />
      <ul className='nav-menu'>
        <li className='nav-menu-item'>
          <NavLink className='nav-menu-item-link' activestyle="active" to='/' onClick={() => defineBackground('home')}><span>00</span>  Home</NavLink>
        </li>
        <li className='nav-menu-item'>
          <NavLink className='nav-menu-item-link' activestyle="active" to='/destination' onClick={() => defineBackground('destination')}  ><span>01</span>  destination</NavLink>
        </li>
        <li className='nav-menu-item'>
          <NavLink className='nav-menu-item-link' activestyle="active" to='/crew' onClick={() => defineBackground('crew')}><span>02</span>  crew</NavLink>
        </li>
        <li className='nav-menu-item'>
          <NavLink className='nav-menu-item-link' activestyle="active" to='/technology' onClick={() => defineBackground('technology')}><span>03</span>  technology</NavLink>
        </li>

      </ul>
      <img className='hamburger' src={hamburger} alt="" onClick={() => handleClick()} />
    </nav>
    // </div>
  )
}

export default Navbar
