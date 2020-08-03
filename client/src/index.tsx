/* eslint-disable func-names */
/* eslint-disable no-extend-native */
import "moment/locale/pt-br";
import "moment/locale/en-gb";
import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom";
import { unregister } from "./serviceWorker";
import { Provider as ReduxStoreProvider } from "react-redux";
import { applyMiddleware } from "redux";
import { reducer, initialState } from "./redux/rootReducer";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { I18nextProvider } from "react-i18next";
import i18next from "./lib/i18next";
import createSagaMiddleware from "redux-saga";
import store from "./store";
import rootSaga from "./redux/rootSaga";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./lib/apollo";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#5dee48",
      main: "#00fa02",
      dark: "#008800",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff6434",
      main: "#00fa02",
      dark: "#008800",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif;",
    allVariants: {
      color: "#8D8D8D",
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#1a1a1a",
      },
    },
    MuiButton: {
      outlinedSecondary: {
        color: "#00fa02",
        borderColor: "#008800",
      },
    },
    MuiRadio: {
      colorSecondary: {
        color: "#008800",
      },
    },
  },
});

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = routerMiddleware(history);

const reduxMiddleware = [middleware, sagaMiddleware];

store.set(reducer(history), initialState, applyMiddleware(...reduxMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <ApolloProvider client={apolloClient}>
      <MuiThemeProvider theme={theme}>
        <ReduxStoreProvider store={store.get()}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </ReduxStoreProvider>
      </MuiThemeProvider>
    </ApolloProvider>
  </I18nextProvider>,
  document.getElementById("root")
);

unregister();
