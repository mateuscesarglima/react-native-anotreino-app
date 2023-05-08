import { useAuth } from "@Context/auth";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthRoutes } from "./StackRoutes";
import { BottomTabRoutes } from "./BottomTabRoutes";

export const Routes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {!isAuthenticated ? <AuthRoutes /> : <BottomTabRoutes />}
    </NavigationContainer>
  );
};
