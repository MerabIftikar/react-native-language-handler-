import 'react-native-gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import language related files
import { I18nextProvider } from 'react-i18next';
import i18n from './translation/index';
import { LanguageProvider } from './hooks/useLanguageContext';
import AppWithLanguage from './hooks/appLanguage';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        {/* i18n provider for translations */}
        <I18nextProvider i18n={i18n}>
          {/* Custom Language Context for switching language */}
          <LanguageProvider>
            <AppWithLanguage />
          </LanguageProvider>
        </I18nextProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
