import { UserActionTypes, CHANGE_AUTH_STATUS, SET_CURRENT_USER, User } from "./types";

export const changeAuth = (status: boolean) => {
  return {
    type: CHANGE_AUTH_STATUS,
    payload: status,
  };
};

export const setCurrentUser = (user: User) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};