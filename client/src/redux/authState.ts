/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import produce from "immer";
import {
  LOCAL_STORAGE_LOGGED_IN,
  LOCAL_STORAGE_USER,
  GITHUB_CLIENT_ID,
} from "../constants";
import { storeValue } from "../lib/storeLocal";
import { takeLatest, put, call, all, delay } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { transport } from "../lib/transport";

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
  isLoggedIn: false,
  user: null,
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

function* authenticationSaga(action: { code: string }): SagaIterator {
  const { code } = action;
  yield delay(1000);
  try {
    const userInfo = yield call(transport, {
      url: "https://api-dev.bunchofnothing.com/github-auth",
      body: JSON.stringify({ code, clientId: GITHUB_CLIENT_ID }),
      method: "POST",
    });

    yield all([
      call(storeValue, LOCAL_STORAGE_LOGGED_IN, JSON.stringify(true)),
      call(storeValue, LOCAL_STORAGE_USER, JSON.stringify(userInfo)),
      put(loginSuccess(userInfo)),
    ]);
  } catch (error) {
    console.log(error);
  }
}

export function* authRootSaga(): SagaIterator {
  yield takeLatest(AUTH.LOGIN_REQUEST as any, authenticationSaga);
}
