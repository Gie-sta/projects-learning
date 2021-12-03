import React from 'react';
import { NavLink, Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { showMobileMenu, destinationPick, crewPick, technologyPick } from '../../../store/actions';
import logo from '../../../assets/shared/logo.svg';
import hamburger from '../../../assets/shared/icon-hamburger.svg';
import data from '../../../helpers/data'



import './Navbar.scss'

const Navbar = () => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showMobileMenu());
  };

  const selectDestination = (destination) => {
    dispatch(destinationPick(destination));
  }
  const selectCrew = (crew) => {
    dispatch(crewPick(crew));
  }
  const selectTechnology = (technology) => {
    dispatch(technologyPick(technology));
  }


  return (

    <nav className='navbar-container'>
      <Link to="/"  > <img src={logo} alt="logo" className='logo-image'

      /></Link>
      <hr />
      <ul className='nav-menu'>
        <li className='nav-menu-item'>
          <NavLink className='nav-menu-item-link' activestyle="active" to='/'

          ><span>00</span>  Home</NavLink>
        </li>
        <li className='nav-menu-item'>
          <NavLink className='nav-menu-item-link' activestyle="active" to='/destination'
            onClick={() => selectDestination(data.destinations[0])}

          ><span>01</span>  destination</NavLink>
        </li>
        <li className='nav-menu-item'>
          <NavLink className='nav-menu-item-link' activestyle="active" to='/crew'
            onClick={() => selectCrew(data.crew[0])}

          ><span>02</span>  crew</NavLink>
        </li>
        <li className='nav-menu-item'>
          <NavLink className='nav-menu-item-link' activestyle="active" to='/technology'
            onClick={() => selectTechnology(data.technology[0])}
          ><span>03</span>  technology</NavLink>
        </li>

      </ul>
      <img className='hamburger' src={hamburger} alt="" onClick={() => handleClick()} />
    </nav>

  )
}

export default Navbar