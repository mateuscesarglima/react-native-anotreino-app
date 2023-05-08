import { FichaProvider } from "@Context/sheets";
import { AuthProvider } from "@Context/auth";
import themes from "@Global/themes";
import { Routes } from "@Routes/index";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

import { ThemeProvider } from "styled-components";

export default function App(): JSX.Element {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <NavigationContainer> */}
      <ThemeProvider theme={themes}>
        <AuthProvider>
          <FichaProvider>
            <Routes />
            <StatusBar style="light" />
          </FichaProvider>
        </AuthProvider>
      </ThemeProvider>
      {/* </NavigationContainer> */}
    </TouchableWithoutFeedback>
  );
}
