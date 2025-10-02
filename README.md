# react-native-language-handler-
A simple React Native project for handling multiple languages with i18next and AsyncStorage
📂 Project Structure
/translation
   ├── en.json   → English words
   ├── ar.json   → Arabic words
   ├── ur.json   → Urdu words
   └── index.js  → Main i18n setup (connects languages)

/hooks
   
   ├── useLanguageContext.js 
   → Context API to switch language
   
   
   └── appLanguage.js  
   → Wraps app with Language Provider

App.js → Entry point of the app

⚙️ Dependencies

Before running the app, install these:

npm install i18next react-i18next
npm install @react-native-async-storage/async-storage
npm install react-native-localize
npm install react-native-gesture-handler
npm install react-native-safe-area-context

📝 Explanation of Each Part
1. Translation Files (📁 /translation)

Each language has its own file. Example:

en.json

{
  "hello": "Hello",
  "welcome": "Welcome"
}


ar.json

{
  "hello": "مرحبا",
  "welcome": "أهلا بك"
}


ur.json

{
  "hello": "ہیلو",
  "welcome": "خوش آمدید"
}


👉 These files are like dictionaries 📖 where we store words for each language.

2. translation/index.js (i18n Setup)

Loads all languages.

Detects device language automatically.

Uses AsyncStorage to remember language choice.

If no language is saved, it defaults to English.

👉 Think of AsyncStorage as a notebook 📝 → it remembers the chosen language even after restarting the app.

3. hooks/useLanguageContext.js

Creates a Context API for language.

Shares the current language across the whole app.

Has a function changeAppLanguage(lang) → when called, it updates the app’s language.

Also uses an appKey → acts like a refresh button 🔄 so that when language changes, the app reloads with the new language.

👉 Think of Context API as a speaker system 🎙 → it spreads the language setting everywhere.

4. hooks/appLanguage.js

Wraps the app navigation with LanguageProvider.

Every time the language changes, it forces navigation to reload with the new language.

Makes sure the app always shows the latest language instantly.

👉 This file is like a controller 🎛 that updates the app when language changes.

5. App.js (Entry Point)

Here we put everything together:

GestureHandlerRootView → allows gesture handling

SafeAreaProvider → respects notches and safe areas

I18nextProvider → provides i18n translations everywhere

LanguageProvider → manages current language and switching

AppWithLanguage → main navigation that reloads when language changes

👉 This file is the main building 🏗 where all helpers live so they work across the whole app.

🔑 Big Picture (Super Easy 💡)

AsyncStorage = 📒 Notebook → remembers chosen language.

i18next = 👩‍🏫 Teacher → translates text into the selected language.

Context API = 🔊 Speaker → spreads the chosen language to the whole app.

appKey = 🔄 Restart Button → refreshes the app when language changes.

App.js = 🏠 Main Building → connects all helpers so they work everywhere.

🚀 How to Run

Clone this repo from GitHub

Run npm install to install dependencies

Run npm start (or expo start if using Expo)

App will open → switch language and see changes live 🎉

🎯 Why This Project?

To teach beginners how to add language support in React Native.

To make it simple and step-by-step so students are not confused.

Can easily be extended to 100+ languages by just adding new .json files
