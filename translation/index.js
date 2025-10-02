import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RNLocalize from "react-native-localize";

import en from "./en.json";
import ar from "./ar.json";
import ur from "./ur.json";

const LANGUAGE_KEY = "language";

const resources = {
  en: { translation: en },
  ar: { translation: ar },
  ur: { translation: ur },
};

const initI18n = async () => {
  // Try to get stored language from AsyncStorage
  let storedLang = await AsyncStorage.getItem(LANGUAGE_KEY);

  // If no stored language, use device language
  if (!storedLang) {
    const locales = RNLocalize.getLocales();
    if (Array.isArray(locales)) {
      storedLang = locales[0].languageCode; // e.g. "en", "ar", "ur"
    }
  }

  const lng = storedLang || "en";

  // Initialize i18n
  await i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources,
    lng,
    fallbackLng: "en", // fallback to English if translation not found
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
  });
};

initI18n();

export default i18n;
