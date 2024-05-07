import { combineReducers } from "redux";
import { IhomeState, homeReducer } from "./reducers/home";
import { HomeAction } from "./actions/home";

export interface storeState {
  home: (state: IhomeState, action: HomeAction) => IhomeState;
}

export const rootReducer = combineReducers<storeState>({
  home: homeReducer,
});
