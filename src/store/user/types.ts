export const CHANGE_AUTH_STATUS = "CHANGE_AUTH_STATUS";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export type UserActionTypes = ChangeAuthStatusAction | SetCurrentUserAction;

export interface UserState {
  isAuthenticated: boolean;
  user: User;
}

export interface User {
  login: string;
  token: string;
}

interface ChangeAuthStatusAction {
  type: typeof CHANGE_AUTH_STATUS;
  payload: boolean;
}

interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER;
  payload: User;
}
