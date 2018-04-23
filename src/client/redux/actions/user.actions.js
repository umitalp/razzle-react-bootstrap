import { userTypes } from "../types";
import axios from "axios";

export const getme = () => {
  return dispatch => {
    axios.get("/api/user/me").then(response => {
      dispatch({
        type: userTypes.GETME,
        user: response.data
      });
    });
  };
};

export const login = (email, password) => {
  return dispatch => {
    dispatch({
      type: userTypes.LOGIN_REQUEST
    });
    axios
      .post("/api/user/login", {
        email,
        password
      })
      .then(response => {
        dispatch({
          type: userTypes.LOGIN_SUCCESS,
          user: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: userTypes.LOGIN_ERROR,
          error: error.response.data.message
        });
      });
  };
};

export const logout = () => {
  return dispatch => {
    axios.get("/api/user/logout").then(response => {
      dispatch({ type: userTypes.LOGOUT });
    });
  };
};

export const signup = user => {
  return dispatch => {
    dispatch({
      type: userTypes.SIGNUP_REQUEST
    });
    axios
      .post("/api/user/signup", user)
      .then(response => {
        dispatch({
          type: userTypes.SIGNUP_SUCCESS,
          user: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: userTypes.SIGNUP_ERROR,
          error: error.response.data.message
        });
      });
  };
};
