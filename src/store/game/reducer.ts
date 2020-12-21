import {
  CHANGE_ALL_PLAYERS,
  CHANGE_CURRENT_LOCATION,
  SET_GAME_STATE,
  GameState,
  GameActionTypes,
  CHANGE_GAME_TOKEN,
} from "./types";

const initialState: GameState = {
  token: "",
  locations: [],
  currentloc: "",
  amountpl: -1,
  amountspy: -1,
  spyplayers: [],
  allplayers: [],
  status: "",
};

export const gameReducer = (
  state = initialState,
  action: GameActionTypes
): GameState => {
  switch (action.type) {
    case CHANGE_ALL_PLAYERS:
      return {
        ...state,
        allplayers: action.payload,
      };
    case CHANGE_GAME_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case CHANGE_CURRENT_LOCATION: {
      return {
        ...state,
        currentloc: action.payload,
      };
    }
    case SET_GAME_STATE: {
      return action.payload;
    }
    default:
      return state;
  }
};
