import { LOG_IN } from '../actions/types'

const logIn = (userName, password) => {
  console.log(userName, password)
  if (userName === 'demo' && password === 'demo') {
    console.log('Log in succsesful!!!')
    return true
    // return 'login success'
  } else
    console.log('logIn Failed!!!!')
  return false
  // return 'Invalid User Name or Password: Try again! '
}

const loginError = (userName, password) => {
  console.log(userName, password);
  if (userName === null && password === null) {
    return false
  }
  else if (userName === 'demo' && password === 'demo') {
    return false
  }
  return true
}

const INTIAL_STATE = {
  userName: null,
  password: null,
  loggedInStatus: null,
  loggedInError: false
};



const loginReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        userName: action.userName,
        password: action.password,
        loggedInStatus: logIn(action.userName, action.password),
        loggedInError: loginError(action.userName, action.password)
      }
    default:
      return state
  }
}


export default loginReducer;