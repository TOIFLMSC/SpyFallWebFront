export const CHANGE_ALL_PLAYERS = "CHANGE_ALL_PLAYERS";
export const CHANGE_CURRENT_LOCATION = "CHANGE_CURRENT_LOCATION";
export const SET_GAME_STATE = "SET_GAME_STATE";
export const CHANGE_GAME_TOKEN = "CHANGE_GAME_TOKEN";
export type GameActionTypes = ChangeAllPlayersAction | SetGameStateAction | ChangeCurrentUserAction | ChangeGameTokenAction;

export interface GameState {
  token: string;
  locations: Array<string>;
  currentloc: string;
  amountpl: number;
  amountspy: number;
  spyplayers: Array<string>;
  allplayers: Array<string>;
  status: string; // "Started" // "Spy won" // "Peaceful won"
}

export interface Game {
  token: string;
  locations: Array<string>;
  currentloc: string;
  amountpl: number;
  amountspy: number;
  spyplayers: Array<string>;
  allplayers: Array<string>;
  status: string; // "Started" // "Spy won" // "Peaceful won"
}

interface SetGameStateAction {
  type: typeof SET_GAME_STATE;
  payload: Game;
}

interface ChangeGameTokenAction {
  type: typeof CHANGE_GAME_TOKEN;
  payload: string;
}

interface ChangeAllPlayersAction {
  type: typeof CHANGE_ALL_PLAYERS;
  payload: Array<string>;
}

interface ChangeCurrentUserAction {
  type: typeof CHANGE_CURRENT_LOCATION;
  payload: string;
}
