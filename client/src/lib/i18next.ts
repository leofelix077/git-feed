import i18next from "i18next";

import pt from "../strings/pt-br";
import en from "../strings/en-gb";
import { SupportedLocale } from "../constants";

const preferredLocale = localStorage.getItem("locale");

i18next.init({
  fallbackLng: SupportedLocale.English,
  debug: true,
  react: {
    wait: true,
    bindI18n: "languageChanged",
    useSuspense: false,
  },
  resources: {
    pt,
    en,
  },
  lng: preferredLocale || SupportedLocale.English,
});

export default i18next;
