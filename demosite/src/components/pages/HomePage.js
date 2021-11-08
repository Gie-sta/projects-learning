import React from 'react'
import Welcome from '../Welcome';
import Products from '../Products';
import Contact from '../Contact';

import './HomePage.scss'

const HomePage = () => {
  return (
    <div className='home-container'>
      <Welcome />
      <Products />
      <Contact />
    </div>
  )
}

export default HomePage
