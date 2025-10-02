import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavigationStack from "../navigation";
import { useLanguageContext } from "./useLanguageContext";
import { navigationRef, isReadyRef } from "../navigation/RootNavigation";

const AppWithLanguage = () => {
  const { appKey } = useLanguageContext();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container]}>
      <NavigationContainer
        key={appKey}
        ref={navigationRef}
        onReady={() => {
          // @ts-ignore
          isReadyRef.current = true;
        }}
      >
        <NavigationStack />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default AppWithLanguage;
