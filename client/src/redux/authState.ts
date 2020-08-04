/* eslint-disable no-param-reassign */
import produce from "immer";
import { LOCAL_STORAGE_LOGGED_IN, LOCAL_STORAGE_USER } from "../constants";
import { storeValue } from "../lib/storeLocal";
import { takeLatest, put } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

export const AUTH = {
  LOGIN_REQUEST: "AUTH.LOGIN_REQUEST",
  LOGIN_SUCCESS: "AUTH.LOGIN_SUCCESS",
  LOGOUT: "AUTH.LOGOUT",
};

interface LoginState {
  isLoggedIn: boolean;
  user: any;
}

interface RequestLogout {
  type: typeof AUTH.LOGOUT;
}

export const requestLogout = (): RequestLogout => ({
  type: AUTH.LOGOUT,
});

interface RequestLogin {
  type: typeof AUTH.LOGIN_REQUEST;
  code: string;
}

export const requestLogin = (code: string): RequestLogin => ({
  type: AUTH.LOGIN_REQUEST,
  code,
});

interface LoginSuccess {
  type: typeof AUTH.LOGIN_SUCCESS;
  user: any;
}

export const loginSuccess = (user: any): LoginSuccess => ({
  type: AUTH.LOGIN_SUCCESS,
  user,
});

export const initialState: LoginState = {
  isLoggedIn:
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_LOGGED_IN) as any) || false,
  user: JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER) as any) || null,
};

export function authStateReducer(
  state = initialState,
  action: any
): LoginState {
  switch (action.type) {
    case AUTH.LOGIN_SUCCESS: {
      return produce(state, (newState) => {
        newState.isLoggedIn = true;
        newState.user = action.user;
      });
    }
    case AUTH.LOGOUT: {
      localStorage.removeItem(LOCAL_STORAGE_LOGGED_IN);
      localStorage.removeItem(LOCAL_STORAGE_USER);
      return produce(state, (newState) => {
        newState.isLoggedIn = false;
        newState.user = null;
      });
    }
    default:
      return state;
  }
}

// function* authenticationSaga(action: { code: string }): any {
//   const { code } = action;

//   // yield call(storeValue, LOCALE_KEY, locale);
//   // storeValue(
//   //   LOCAL_STORAGE_LOGGED_IN,
//   //   JSON.stringify(true)
//   // );
//   // storeValue(LOCAL_STORAGE_USER, JSON.stringify(user));
// }

// export function* authRootSaga(): SagaIterator {
//   // yield takeLatest(AUTH.LOGIN_REQUEST as any, authenticationSaga);
// }
