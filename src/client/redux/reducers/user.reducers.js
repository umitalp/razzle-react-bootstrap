import { userTypes } from "../types";

const initialState = {
  currentUser: undefined,
  error: undefined,
  loginLoading: false,
  signupLoading: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.GETME:
      return {
        ...state,
        currentUser: action.user
      };
    case userTypes.LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true,
        error: undefined
      };
    case userTypes.LOGIN_ERROR:
      return {
        ...state,
        loginLoading: false,
        error: action.error
      };
    case userTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        error: undefined,
        currentUser: action.user
      };
    case userTypes.LOGOUT:
      return {
        ...state,
        currentUser: undefined
      };
    case userTypes.SIGNUP_REQUEST:
      return {
        ...state,
        signupLoading: true,
        error: undefined
      };
    case userTypes.SIGNUP_ERROR:
      return {
        ...state,
        signupLoading: false,
        error: action.error
      };
    case userTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        signupLoading: false,
        error: undefined,
        currentUser: action.user
      };
    default:
      return state;
  }
};

export default userReducer;
