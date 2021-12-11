import i18next from "i18next";
import english from "./locize/english.json";
import russian from "./locize/russian.json";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: english,
    ru: russian,
  },
  react: {
    useSuspense: true,
  },
});

export default i18next;
