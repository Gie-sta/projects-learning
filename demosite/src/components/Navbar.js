import React from 'react'
import { Link } from "react-router-dom";
import { TiThMenu } from 'react-icons/ti';
import { useDispatch } from "react-redux";

import { showMobileMenu } from '../store/actions/index';
import './Navbar.scss'

const Navbar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showMobileMenu());
  };


  return (
    <div id='nav-container'>
      <div className='main-container'>
        <div className='nav-small'>
          <ul className='nav-menu-small'>
            <li className='nav-item-small'>
              <Link className='nav-link-small' to="/content">MENU</Link>
            </li>
            <li className='nav-item-small'>
              <Link className='nav-link-small' to="/content">SOME TEXT</Link>
            </li>
            <li className='nav-item-small'>
              <Link className='nav-link-small' to="/content">ANOTHER ITEM</Link>
            </li>
            <li className='nav-item-small'>
              <Link className='nav-link-small' to="/content">ONE MORE</Link>
            </li>
            <li className='nav-item-small'>
              <Link className='nav-link-small' to="/content">AND LAST ONE</Link>
            </li>
          </ul>
        </div>
        <div className='navbar'>
          <Link className='nav-logo' to="/" >
            <img src="../imgs/DEMOSITE.svg" alt="" />
          </Link>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link className='nav-link' to="/">HOME</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/content">SERVICE</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/content">WORKS</Link>
              <ul className="dropdown">
                <li><Link className='drop-link' to="/content">ALL</Link></li>
                <li><Link className='drop-link' to="/content">GRAPHIC</Link></li>
                <li><Link className='drop-link' to="/content">WORKS</Link></li>
                <li><Link className='drop-link' to="/content">ABOUT ME</Link></li>
                <li><Link className='drop-link' to="/content">WEBSITE</Link></li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/content">ABOUT ME</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/content">CONTACT</Link>
            </li>
          </ul>
          <TiThMenu
            id='hamburger'
            onClick={() => handleClick()} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
