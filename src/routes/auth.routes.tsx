import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "@Screens/Login";
import React from "react";
const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};
