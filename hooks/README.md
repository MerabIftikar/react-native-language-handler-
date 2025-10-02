📂 Hooks Folder

This folder contains custom hooks and context used to manage language switching in the app.
It ensures that the whole app updates automatically when the user changes the language.
Added custom hook for language handling
📄 useLanguageContext.js

This file creates and manages the Language Context.
It has three main jobs:

Provide current language → so the app always knows which language is active.

Change the app language → updates the language everywhere using i18n.changeLanguage.

Save language in AsyncStorage → so the selected language stays even after the app restarts.

👉 Exports:

LanguageProvider → Wrap the app inside this provider.

useLanguageContext() → A custom hook to easily use language state and function in any component.

📄 appLanguage.js

This is the main wrapper for the app with language support.

It listens for the appKey from useLanguageContext.

Every time the language changes → appKey changes → the NavigationContainer reloads with the new language.

Ensures that all screens and texts instantly update to the selected language.

Uses navigationRef and isReadyRef for navigation handling outside of React components.

👉 Purpose:
To make sure the entire app re-renders when a user changes language.

✅ With these two files, your app gets global language switching support + persistence using AsyncStorage.
