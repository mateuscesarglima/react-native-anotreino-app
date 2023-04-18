import { FichaProvider } from "@Context/Ficha";
import { AuthProvider } from "@Context/auth";
import themes from "@Global/themes";
import { Routes } from "@Routes/index";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

import { ThemeProvider } from "styled-components";

export default function App(): JSX.Element {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemeProvider theme={themes}>
        <FichaProvider>
          <AuthProvider>
            <Routes />
            <StatusBar style="light" />
          </AuthProvider>
        </FichaProvider>
      </ThemeProvider>
    </TouchableWithoutFeedback>
  );
}
