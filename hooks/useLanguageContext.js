import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from '../translation/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LanguageContext = createContext({
  language: 'en',
  changeAppLanguage: async (lang) => {},
  appKey: 0,
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState();
  const [appKey, setAppKey] = useState(0);

  useEffect(() => {
    (async () => {
      const lang = await AsyncStorage.getItem('language');
      if (lang) {
        setLanguage(lang);
        await i18n.changeLanguage(lang);
      }
    })();
  }, []);

  const changeAppLanguage = async (lang) => {
    setLanguage(lang);
    await i18n.changeLanguage(lang);
    await AsyncStorage.setItem('language', lang);
    setAppKey(prev => prev + 1);
  };

  return (
    <LanguageContext.Provider value={{ language, changeAppLanguage, appKey }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
