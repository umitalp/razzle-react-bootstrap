import { taskTypes } from "../types";

const initialState = {
  error: undefined,
  tasksLoading: false,
  tasks: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default taskReducer;
