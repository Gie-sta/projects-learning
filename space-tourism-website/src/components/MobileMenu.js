import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { hideMobileMenu } from "../store/actions/index";
import close from '../assets/shared/icon-close.svg';
import './MobileMenu.scss'

const MobileMenu = () => {
  const mobileMenu = useSelector((state) => state.mobileMenu)
  console.log(mobileMenu);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(hideMobileMenu())
  }
  return (
    <div className='mobile'>
      <div className='mobile-container' id={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <div className="cancel-mobile-menu">
          <img src={close} alt="" onClick={() => handleClick()} className='cancel-sign' />
        </div>
        <ul className="mobile-menu-items">
          <li className='mobile-menu-item'>
            <Link className='mobile-menu-link' to='/' onClick={() => handleClick()}><span>00 </span>Home</Link>
          </li>
          <li className='mobile-menu-item'>
            <Link className='mobile-menu-link' to='/destination' onClick={() => handleClick()}><span>01 </span>destination</Link>
          </li>
          <li className='mobile-menu-item'>
            <Link className='mobile-menu-link' to='/crew' onClick={() => handleClick()}><span>02 </span>crew</Link>
          </li>
          <li className='mobile-menu-item'>
            <Link className='mobile-menu-link' to='/technology' onClick={() => handleClick()}><span>03 </span>Technology</Link>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default MobileMenu
