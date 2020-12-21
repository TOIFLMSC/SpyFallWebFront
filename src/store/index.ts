import { combineReducers } from "redux";
import { UserState } from "./user/types";
import { userReducer } from "./user/reducer";
import { GameState, gameReducer } from "./game";

export interface ApplicationState {
  user: UserState;
  game: GameState;
}

export const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
});
