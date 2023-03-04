import themes from "@Global/themes";
import { Login } from "@Screens/Login";
import { useAssets } from "expo-asset";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={themes}>
      <Login />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
