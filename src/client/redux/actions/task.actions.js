import { taskTypes } from "../types";
import axios from "axios";

export const getMyTasks = () => {
  return dispatch => {
    dispatch({ type: taskTypes.GET_MY_TASKS_REQUEST });
    axios
      .get("/api/task/me")
      .then(response => {
        const { Tasks } = response.data;
        dispatch({ type: taskTypes.GET_MY_TASKS_SUCCESS, tasks: Tasks });
      })
      .catch(error => {
        dispatch({ type: taskTypes.GET_MY_TASKS_ERROR, error });
      });
  };
};

export const addNewTask = content => {
  return dispatch => {
    axios
      .post("/api/task/add", { content })
      .then(response => {
        console.log("Add new task response", response);
      })
      .catch(error => {
        console.log("Error add new task", error);
      });
  };
};
