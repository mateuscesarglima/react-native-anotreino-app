import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Barbell, PersonSimpleRun, UserCircle } from "phosphor-react-native";

import React from "react";
import { Platform } from "react-native";
import {
  HitNavigation,
  HomeNavigation,
  ProfileNavigation,
} from "./StackRoutes";

const Tab = createBottomTabNavigator();

export const BottomTabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Barbell size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Hit"
        component={HitNavigation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <PersonSimpleRun size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <UserCircle size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
