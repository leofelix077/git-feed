import { combineReducers, Reducer } from "redux";
import {
  localeDetectorReducer as localeDetector,
  initialState as localeDetectorState,
} from "./localeDetector";
import {
  authStateReducer as authState,
  initialState as authStateState,
} from "./authState";
import { connectRouter } from "connected-react-router";

export const reducer = (history: any): Reducer =>
  combineReducers({
    localeDetector,
    router: connectRouter(history),
    authState,
  });

export const initialState = {
  localeDetector: localeDetectorState,
  authState: authStateState,
};

export type RootState = typeof initialState;
