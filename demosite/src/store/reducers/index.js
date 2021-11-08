import { combineReducers } from "redux";
import { mobileMenu } from "./mobileMenu";
import { meteoReducer } from "./meteoReducer";

export const rootReducer = combineReducers({
  mobileMenu,
  meteoReducer
});