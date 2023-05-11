import { useAuth } from "@Context/auth";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthRoutes, StackRoutes } from "./StackRoutes";
import { ActivityIndicator, View } from "react-native";
import { useTheme } from "styled-components/native";

export const Routes = () => {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <NavigationContainer>
      {isLoading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size={"large"} />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          {!isAuthenticated ? <AuthRoutes /> : <StackRoutes />}
        </View>
      )}
    </NavigationContainer>
  );
};
