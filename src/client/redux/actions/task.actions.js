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
        dispatch(getMyTasks()); // Re-fetch the tasks
        dispatch({ type: taskTypes.ADD_NEW_TASK_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: taskTypes.ADD_NEW_TASK_ERROR, error: error });
      });
  };
};

export const removeTask = id => {
  return dispatch => {
    axios
      .post("/api/task/remove", { id })
      .then(response => {
        dispatch(getMyTasks()); // Re-fetch the tasks
        dispatch({ type: taskTypes.REMOVE_TASK_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: taskTypes.REMOVE_TASK_ERROR, error });
      });
  };
};
