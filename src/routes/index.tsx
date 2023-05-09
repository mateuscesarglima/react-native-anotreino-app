import { useAuth } from "@Context/auth";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthRoutes, StackRoutes } from "./StackRoutes";

export const Routes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {!isAuthenticated ? <AuthRoutes /> : <StackRoutes />}
    </NavigationContainer>
  );
};
