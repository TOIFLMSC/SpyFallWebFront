import {
  CHANGE_ALL_PLAYERS,
  CHANGE_CURRENT_LOCATION,
  SET_GAME_STATE,
  CHANGE_GAME_TOKEN,
  Game
} from "./types";

export const ChangeAllPlayers = (players: Array<string>) => {
  return {
    type: CHANGE_ALL_PLAYERS,
    payload: players,
  };
};

export const ChangeGameToken = (token: string) => {
  return {
    type: CHANGE_GAME_TOKEN,
    payload: token
  }
}

export const ChangeCurrentLocation = (location: string) => {
  return {
    type: CHANGE_CURRENT_LOCATION,
    payload: location,
  };
};

export const SetGameState = (state: Game) => {
  return {
    type: SET_GAME_STATE,
    payload: state,
  };
};
