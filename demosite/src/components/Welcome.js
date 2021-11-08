import React from 'react'
import { Link } from 'react-router-dom'

import './Welcome.scss'

const Welcome = () => {
  return (
    <div className='welcome-container'>
      <div className='welcome-column'>
        <h1>WELCOME</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis
          nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea
          commodo consequat.</p>
        <Link className='button' to="/content">LEARN MORE </Link>
      </div>
      <div className='design-column'>
        <img src="../imgs/cofee.jpg" alt="" />
        <div className='design-text'>
          <h3>UI/UX DESIGN</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  )
}

export default Welcome
