import { useAuth } from "@Context/auth";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export const Routes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
};
