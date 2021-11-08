import React from 'react';
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";

import { hideMobileMenu } from "../store/actions/index";
import './MobileMenu.scss'

const MobileMenu = () => {

  const mobileMenu = useSelector((state) => state.mobileMenu)
  // console.log(mobileMenu);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(hideMobileMenu())
  }
  return (
    <div className='mob-menu' id={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
      <ul className='mob-menu-items'>
        <li className='mob-menu-item'>
          <Link className='mob-menu-link' to="/" onClick={() => handleClick()}>HOME</Link>
        </li>
        <li className='mob-menu-item'>
          <Link className='mob-menu-link' to="/content" onClick={() => handleClick()}>SERVICE</Link>
        </li>
        <li className='mob-menu-item'>
          <Link className='mob-menu-link' to="/content">WORKS</Link>
          <ul className="dropdown">
            <li><Link className='drop-link' to="/content" onClick={() => handleClick()}>ALL</Link></li>
            <li><Link className='drop-link' to="/content" onClick={() => handleClick()}>GRAPHIC</Link></li>
            <li><Link className='drop-link' to="/content" onClick={() => handleClick()}>WORKS</Link></li>
            <li><Link className='drop-link' to="/content" onClick={() => handleClick()}>ABOUT ME</Link></li>
            <li><Link className='drop-link' to="/content" onClick={() => handleClick()}>WEBSITE</Link></li>
          </ul>
        </li>
        <li className='mob-menu-item'>
          <Link className='mob-menu-link' to="/content" onClick={() => handleClick()}>ABOUT ME</Link>
        </li>
        <li className='mob-menu-item'>
          <Link className='mob-menu-link' to="/content" onClick={() => handleClick()}>CONTACT</Link>
        </li>
      </ul>
      <div className="cancel-mobile-menu">
        <ImCross onClick={() => handleClick()} />
      </div>
    </div>
  )
}

export default MobileMenu
