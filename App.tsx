import { AuthProvider } from "@Context/auth";
import { FichaProvider } from "@Context/sheets";
import themes from "@Global/themes";
import { Routes } from "@Routes/index";
import {
  Lato_400Regular,
  Lato_700Bold,
  useFonts,
} from "@expo-google-fonts/lato";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

import Entypo from "@expo/vector-icons/Entypo";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Toast from "react-native-toast-message";
import { ThemeProvider } from "styled-components";
import { CountdownProvider } from "@Context/Countdown";
import { Welcome } from "@Screens/Welcome";

SplashScreen.preventAutoHideAsync().catch((err) => console.log(err));

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({ Lato_400Regular, Lato_700Bold });

  useEffect(() => {
    const prepare = async () => {
      try {
        // Keep the splash screen visible while we fetch resources
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
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
    </View>
  );
}
