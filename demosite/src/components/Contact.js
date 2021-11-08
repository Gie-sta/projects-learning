import React from 'react'

import './Contacts.scss'

const Contact = () => {
  return (
    <div>
      <div className='contacts-container'>
        <div className='contacts-column'>
          <h1>CONTACT</h1>
          <hr />
          <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis
            nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea
            commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis
            nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea
            commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis
            nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea
            commodo consequat.</p>
        </div>
        <form className='form-column'>
          <div className='input-group'>
            <label htmlFor="name" className='form-label'>NAME</label>
            <input className='input-name'
              type="text"
              name="name"
              id="name" />
          </div>
          <div className='input-group'>
            <label htmlFor="email" className='form-label'>EMAIL</label>
            <input className='input-email'
              type="email"
              name="email"
              id="email"
              placeholder="text@text.com"
              required />
          </div>
          <div className='input-group'>
            <label htmlFor="text" className='form-label'>MESSAGE</label>
            <input className='input-text'
              type="textbox"
              name="text"
              id="text" required />
          </div>
          <button className='button'>LEARN MORE</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
