import { combineReducers } from "redux";
import { mobileMenu } from "./mobileMenu";
import { backgroundReducer } from "./backgroundReducer";


export const rootReducer = combineReducers({
  mobileMenu,
  backgroundReducer

});