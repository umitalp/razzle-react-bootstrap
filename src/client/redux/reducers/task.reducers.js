import { taskTypes } from "../types";

const initialState = {
  error: undefined,
  tasksLoading: false,
  tasks: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET MY TASKS
    case taskTypes.GET_MY_TASKS_REQUEST:
      return {
        ...state,
        tasksLoading: true
      };
    case taskTypes.GET_MY_TASKS_SUCCESS:
      return {
        ...state,
        tasksLoading: false,
        tasks: action.tasks
      };
    case taskTypes.GET_MY_TASKS_ERROR:
      return {
        ...state,
        tasksLoading: false,
        error: action.error
      };
    // ADD NEW TASK
    case taskTypes.ADD_NEW_TASK_REQUEST:
      return {
        ...state,
        tasksLoading: true
      };
    case taskTypes.ADD_NEW_TASK_SUCCESS:
      return {
        ...state,
        tasksLoading: false
      };
    case taskTypes.ADD_NEW_TASK_ERROR:
      return {
        ...state,
        tasksLoading: false,
        error: action.error
      };
    // REMOVE A TASK
    case taskTypes.REMOVE_TASK_REQUEST:
      return {
        ...state,
        tasksLoading: true
      };
    case taskTypes.REMOVE_TASK_SUCCESS:
      return {
        ...state,
        tasksLoading: false
      };
    case taskTypes.REMOVE_TASK_ERROR:
      return {
        ...state,
        tasksLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default taskReducer;
