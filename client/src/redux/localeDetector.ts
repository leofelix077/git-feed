/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { takeLatest, put, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import produce from "immer";
import { SupportedLocale, LOCALE_KEY } from "../constants";
import i18next from "i18next";
import { storeValue } from "../lib/storeLocal";

// types

export const LOCALE_CHANGE = {
  REQUEST: "LOCALE_CHANGE.REQUEST",
  SET: "LOCALE_CHANGE.SET",
};

// actions
interface RequestLocaleChange {
  type: typeof LOCALE_CHANGE.REQUEST;
  locale: SupportedLocale;
}

export const requestLocaleChange = (
  locale: SupportedLocale
): RequestLocaleChange => ({
  type: LOCALE_CHANGE.REQUEST,
  locale,
});

interface SetLocaleChange {
  type: typeof LOCALE_CHANGE.SET;
  locale: SupportedLocale;
}

export const setLocaleChange = (locale: SupportedLocale): SetLocaleChange => ({
  type: LOCALE_CHANGE.SET,
  locale,
});

// reducer
interface CurrentLocale {
  currentLocale: SupportedLocale;
}

export const initialState: CurrentLocale = {
  currentLocale: SupportedLocale.English,
};

export function localeDetectorReducer(
  state = initialState,
  action: any
): CurrentLocale {
  switch (action.type) {
    case LOCALE_CHANGE.SET:
      return produce(state, (newState) => {
        newState.currentLocale = action.locale;
      });
    default:
      return state;
  }
}

// saga
function* localeChangeSaga(action: { locale: SupportedLocale }): any {
  const { locale } = action;
  yield call([i18next, i18next.changeLanguage], locale);
  yield put(setLocaleChange(locale));
  yield call(storeValue, LOCALE_KEY, locale);
}

export function* localeDetectorSaga(): SagaIterator {
  yield takeLatest(LOCALE_CHANGE.REQUEST as any, localeChangeSaga);
}
