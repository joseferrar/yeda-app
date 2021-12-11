import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { I18nextProvider } from "react-i18next";
import i18n from "./src/translate/i18n";
import { theme } from "./src/theme/default";
import store from "./src/store/store";
import MainNavbar from "./src/components/Navbar/MainNavbar";

export default function App() {
  let [fontsLoaded] = useFonts({
    "NunitoSans-Black": require("./assets/fonts/NunitoSans-Black.ttf"),
    "NunitoSans-Regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <I18nextProvider i18n={i18n}>
        <NativeBaseProvider theme={theme}>
          <Provider store={store}>
            <View style={styles.container}>
              <StatusBar style="dark" />
              <MainNavbar />
            </View>
          </Provider>
        </NativeBaseProvider>
      </I18nextProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
