import { userTypes } from '../types'

const initialState = {
  currentUser: {},
  loginLoading: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case userTypes.LOGIN_REQUEST:
      return { ...state, loginLoading: true }
    case userTypes.LOGIN_FAILURE:
      return { ...state, loginLoading: false }
      case userTypes.LOGIN_SUCCESS:
      return { ...state, loginLoading: false, currentUser: { username: 'Demo User' } }
    // Logout
    case userTypes.LOGOUT:
        return { ...state, currentUser: initialState.currentUser }
    default:
      return state
  }
}

export default userReducer
