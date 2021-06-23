import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../actions';
import Success from './Success'
import './LoginForm.css'



const LoginForm = (props) => {
  // console.log(props)

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(userName, password);
    props.loginUser(userName, password);
    setPassword('');
    setUserName('');
  };

  const RenderLoginError = () => {
    console.log(props)
    console.log(props.loggedInError)
    if (props.loggedInError === true) {
      return 'Invalid username or password. Try again!'
    }
  }


  const showContent = () => {
    if (!props.loggedInStatus) {
      return (
        // <div className="sss">
        <form className='form-container' onSubmit={onSubmit} >
          <div>

            <h1 className='header'>Login</h1>
            <p className='text'>Name and Password should be stored in Redux state. Proceed to next
              screen if demo/demo is enterd. </p>
          </div>
          <div>
            <div>
              <input
                className='input-name'
                type="text"
                id='name'
                placeholder='Name' required
                value={userName}
                onChange={(e) => setUserName(e.target.value)} />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input className='input-password'
                type="password"
                name="password"
                id="password" required
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p className='text error-text' >{RenderLoginError()}</p>
          </div>
          <div id='btn'>
            <button className='btn'>Next</button>
          </div>
          {/* <p>{props.loggedInStatus}</p> */}
        </form>

      )
    }
    else {
      return <Success />
    }
  }

  return (
    <div className='content-container'>
      {showContent()}
    </div>
  )
}


const mapStateToProp = state => {
  // console.log(state.userName)
  return {
    userName: state.userName,
    password: state.password,
    loggedInStatus: state.loggedInStatus,
    loggedInError: state.loggedInError
  }
}


const mapDispatchToProps = dispatch => {
  return {
    loginUser: bindActionCreators(loginUser, dispatch)
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(LoginForm)