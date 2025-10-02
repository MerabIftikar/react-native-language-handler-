🌍 Translation Folder – Multi-Language Support

This folder adds multi-language support to the React Native app.
It allows switching between English, Arabic, Urdu, Yoruba, etc. and remembers the user’s choice.

📦 Why We Use These Packages

i18next → Main library for translations.

react-i18next → Connects i18next with React Native.

AsyncStorage → Saves the selected language for next time.

react-native-localize → Detects device default language.

📂 Files in This Folder

en.json → English text

ar.json → Arabic text

or.json, zu.json, ig.json, hu.json, yo.json, sh.json → Other demo languages

index.js → Connects all translations and initializes i18n

⚡ How index.js Works

Import i18n, AsyncStorage, Localize, and all language files.

Create a resources object to hold all translations.

Check if a saved language exists in AsyncStorage.

If not, detect the device language.

If nothing found, use English as default.

Initialize i18n with resources and fallback language.

Export i18n so the app can use it everywhere.

🚀 How to Use in Components
import { useTranslation } from "react-i18next";

const { t } = useTranslation();

<Text>{t("hello")}</Text>


English → Hello

Arabic → مرحبا

Yoruba → Bawo

➕ Adding a New Language

Create a new file, e.g. fr.json.

Add translations:

{
  "hello": "Bonjour",
  "welcome": "Bienvenue"
}


Import in index.js:

import fr from './fr.json';


Add to resources:

fr: { translation: fr }


Now your app supports French 🎉

✅ Short and simple. No confusion. Just what the user needs to know.
