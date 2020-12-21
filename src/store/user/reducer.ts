import {
  UserActionTypes,
  UserState,
  CHANGE_AUTH_STATUS,
  SET_CURRENT_USER,
} from "./types";
import isEmpty from "lodash/isEmpty";

const log = localStorage.getItem("login");

const initialState: UserState = {
  isAuthenticated: localStorage.getItem("token") ? true : false,
  user: {
    login: log ? log : "",
    token: "",
  },
};

export const userReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case CHANGE_AUTH_STATUS: {
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    }
    default:
      return state;
  }
};
