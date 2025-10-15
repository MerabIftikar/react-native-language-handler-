import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../navigation/NavKeys';
import { showSuccessMsg } from '../../utils/appMessages';
import i18next from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLanguageContext } from '../../hooks/useLanguageContext';

const useController = () => {
  const navigation = useNavigation<NavigationProp>();
  const { changeAppLanguage } = useLanguageContext();
  const [selectedLanguage, setSelectedLanguage] = useState<string>();

  const languages = [
    { id: '1', name: 'English', code: 'en' },
    { id: '2', name: 'Arabic',  code: 'ar' },
    { id: '3', name: 'Swahilli',  code: 'sh' },
    { id: '4', name: 'Oromo',  code: 'or' },
    { id: '5', name: 'Zulu',  code: 'zu' },
    { id: '6', name: 'Igbo',  code: 'ig' },
    { id: '7', name: 'Hausa',  code: 'hu' },
    { id: '8', name: 'Yoruba',  code: 'yo' },
    {id: '9' , name:'Spanish',  code:'es'  },
    {id:'10',name:"Portuguese", code:'pt'},
  ];

  useEffect(() => {
    const getCurrentLanguage = async () => {
      const currentLangCode = await AsyncStorage.getItem('language');
      const currentLang = languages.find(lang => lang.code === (currentLangCode || i18next.language));
      if (currentLang) {
        setSelectedLanguage(currentLang.id);
      }
    };
    getCurrentLanguage();
  }, []);
  const onSelectLanguage = (id: string) => {
    setSelectedLanguage(id);
  };

  const onSaveChanges = async () => {
    const selectedLang = languages.find(lang => lang.id === selectedLanguage);
    if (selectedLang?.code) {
      await changeAppLanguage(selectedLang.code);
      showSuccessMsg(`Language changed to ${selectedLang?.name}`);
      navigation.goBack();
    }
  };

  return {
    languages,
    selectedLanguage,
    
    onSelectLanguage,
    onSaveChanges,
  };
};


export default useController;
