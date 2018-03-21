import { userTypes } from '../types'

export default {
  login,
  logout
}

const login = (username, password) => {
  return dispatch => {
    dispatch(userTypes.LOGIN_REQUEST)
    setTimeout(() => {
      dispatch(userTypes.LOGIN_SUCCESS)
    }, 1000)
  }
}

const logout = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(userTypes.LOGOUT)
    }, 1000)
  }
}
