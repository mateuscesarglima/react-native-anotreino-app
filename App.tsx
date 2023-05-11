import { AuthProvider } from "@Context/auth";
import { FichaProvider } from "@Context/sheets";
import themes from "@Global/themes";
import { Routes } from "@Routes/index";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import {
  Lato_400Regular,
  Lato_700Bold,
  useFonts,
} from "@expo-google-fonts/lato";
import * as SplashScreen from "expo-splash-screen";
import Toast from "react-native-toast-message";
import { ThemeProvider } from "styled-components";
import Entypo from "@expo/vector-icons/Entypo";

import * as Font from "expo-font";

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    };
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null as any;
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      onLayout={onLayoutRootView}
    >
      {/* <NavigationContainer> */}
      <ThemeProvider theme={themes}>
        <AuthProvider>
          <FichaProvider>
            <Routes />
            <StatusBar style="light" />
            <Toast />
          </FichaProvider>
        </AuthProvider>
      </ThemeProvider>
      {/* </NavigationContainer> */}
    </TouchableWithoutFeedback>
  );
}
