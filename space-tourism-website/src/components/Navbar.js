import React from 'react';
import { NavLink, Link } from "react-router-dom";
import logo from '../assets/shared/logo.svg'


import './Navbar.scss'

const Navbar = () => {
  return (
    <div>

      <div className='navbar-container'>
        <Link to="/" exact={true} > <img src={logo} alt="logo" className='logo-image' /></Link>
        <hr />
        <ul className='nav-menu'>
          <li className='nav-menu-item'>
            <NavLink className='nav-menu-item-link' activeClassName="active" to='/' exact={true}><span>00</span>  Home</NavLink>
          </li>
          <li className='nav-menu-item'>
            <NavLink className='nav-menu-item-link' activeClassName="active" to='/destination'><span>01</span>  destination</NavLink>
          </li>
          <li className='nav-menu-item'>
            <NavLink className='nav-menu-item-link' activeClassName="active" to='/crew'><span>02</span>  crew</NavLink>
          </li>
          <li className='nav-menu-item'>
            <NavLink className='nav-menu-item-link' activeClassName="active" to='/technology'><span>03</span>  technology</NavLink>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar
