import { userTypes } from '../types'

const initialState = {
  currentUser: {},
  error: undefined,
  loginLoading: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true,
        error: undefined
      }
    case userTypes.LOGIN_ERROR:
      return {
        ...state,
        loginLoading: false,
        error: action.error
      }
    case userTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        error: undefined,
        currentUser: action.user
      }
    case userTypes.LOGOUT:
        return {
          ...state,
          currentUser: {}
        }
    default:
      return state
  }
}

export default userReducer
