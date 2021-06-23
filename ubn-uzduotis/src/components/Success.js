import React from 'react'
import { connect } from 'react-redux';
import './Success.css'

const Success = ({ userName }) => {

  return (
    <div className='success-container'>
      <div className='success-text'>
        <h1>Success</h1>
        <p className='text'>Logged in as <span>{userName}</span></p>
      </div>
    </div>
  )
}

const mapStateToProp = state => {
  return {
    userName: state.userName,
  }
}



export default connect(mapStateToProp)(Success)



