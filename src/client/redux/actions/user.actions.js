import { userTypes } from "../types";
import axios from "axios";

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
    dispatch({ type: userTypes.LOGOUT });
    // axios.post("/api/user/logout").then(response => {
    // });
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
