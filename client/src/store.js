import { createStore } from "redux";

class Store {
  mStore = null;

  get() {
    return this.mStore;
  }

  set(reducer, initialState, enhancer) {
    if (process.env.NODE_ENV === "production") {
      this.mStore = createStore(reducer, initialState, enhancer);
    } else {
      // eslint-disable-next-line global-require,@typescript-eslint/no-var-requires,import/no-extraneous-dependencies
      const { composeWithDevTools } = require("redux-devtools-extension");

      this.mStore = createStore(
        reducer,
        initialState,
        composeWithDevTools(enhancer)
      );
    }
  }
}

const singleton = new Store();
export default singleton;
