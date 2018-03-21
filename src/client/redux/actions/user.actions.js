import { userConstants } from '../constants'

export default {
  login,
  logout
}

const login = (username, password) => {
  return dispatch => {
    dispatch(userConstants.LOGIN_REQUEST)
    setTimeout(() => {
      dispatch(userConstants.LOGIN_SUCCESS)
    }, 1000)
  }
}

const logout = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(userConstants.LOGOUT)
    }, 1000)
  }
}
