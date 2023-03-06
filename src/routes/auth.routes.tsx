import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "@Screens/Login";
import { Register } from "@Screens/Register";
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
      <Screen name="Register" component={Register} />

    </Navigator>
  );
};
