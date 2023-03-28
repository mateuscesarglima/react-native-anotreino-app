import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@Screens/Home";

import React from "react";
import { Platform } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        //   options={{
        //     tabBarIcon: ({ size, color }) => (
        //       <MaterialIcons name="attach-money" size={size} color={color} />
        //     ),
        //   }}
      />
    </Navigator>
  );
};
