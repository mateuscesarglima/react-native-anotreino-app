import themes from "@Global/themes";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components";

export default function App(): JSX.Element {
  return (
    <View>
      <ThemeProvider theme={themes}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </ThemeProvider>
    </View>
  );
}
