import { AuthProvider } from "@Context/auth";
import themes from "@Global/themes";
import { Routes } from "@Routes/index";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={themes}>
      <AuthProvider>
        <Routes />
        <StatusBar style="auto" />
      </AuthProvider>
    </ThemeProvider>
  );
}
