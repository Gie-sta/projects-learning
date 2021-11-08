import React from 'react'
import { Link } from "react-router-dom";
import './Footer.scss'

const Footer = () => {
  return (
    <div id='footer'>
      <div className="footer-container">
        <p className='footer-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat</p>
        <ul className='footer-menu'>
          <li className='footer-item'>
            <Link className='footer-item-link' to="/">HOME</Link>
          </li>
          <li className='footer-item'>
            <Link className='footer-item-link' to="/content">SERVICE</Link>
          </li>
          <li className='footer-item'>
            <Link className='footer-item-link' to="/content">WORKS</Link>
          </li>
          <li className='footer-item'>
            <Link className='footer-item-link' to="/content">ABOUT ME</Link>
          </li>
          <li className='footer-item'>
            <Link className='footer-item-link' to="/content">CONTACT</Link>
          </li>
        </ul>
      </div>
      <div id='copyright'>
        <p ><span id='transparent'>&#169;</span> <span id='reg'>DEMO</span><span id='transparent'>SITE All rights reserved</span></p>
      </div>
    </div>
  )
}

export default Footer
