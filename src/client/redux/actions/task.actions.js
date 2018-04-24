import { taskTypes } from "../types";
import axios from "axios";

export const getMyTasks = () => {
  return dispatch => {
    dispatch({ type: taskTypes.GET_MY_TASKS_REQUEST });
    axios
      .get("/api/task/me")
      .then(response => {
        const { Tasks } = response.data;
        setTimeout(() => {
          dispatch({ type: taskTypes.GET_MY_TASKS_SUCCESS, tasks: Tasks });
        }, 1000); // Simulate server delay
      })
      .catch(error => {
        dispatch({ type: taskTypes.GET_MY_TASKS_ERROR, error });
      });
  };
};

export const addNewTask = (author, content) => {
  return dispatch => {
    axios
      .post("/api/task/add", { author, content })
      .then(response => {
        console.log("Add new task response", response);
      })
      .catch(error => {
        console.log("Error add new task", error);
      });
  };
};
