import { userTypes } from '../types'
import axios from 'axios'

export const login = (email, password) => {
  return dispatch => {
    dispatch({
      type: userTypes.LOGIN_REQUEST
    })
    axios.post('/api/user/login', {
      email,
      password
    })
    .then(response => {
      dispatch({
        type: userTypes.LOGIN_SUCCESS,
        user: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: userTypes.LOGIN_ERROR,
        error: error.response.data.message
      })
    })
  }
}

export const logout = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(userTypes.LOGOUT)
    }, 1000)
  }
}
