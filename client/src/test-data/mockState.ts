import { RootState } from "../redux/rootReducer";
import { SupportedLocale } from "../constants";

export const getMockState = (): RootState => ({
  localeDetector: {
    currentLocale: SupportedLocale.Portuguese,
  },
  authState: {
    user: null,
    isLoggedIn: false,
  },
});
