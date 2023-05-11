import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Hit } from "@Screens/Hit";
import { Home } from "@Screens/Home";
import { Profile } from "@Screens/Profile";
import { Barbell, PersonSimpleRun, UserCircle } from "phosphor-react-native";
import React from "react";
import { Platform } from "react-native";

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
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Barbell size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Hit"
        component={Hit}
        options={{
          tabBarIcon: ({ size, color }) => (
            <PersonSimpleRun size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <UserCircle size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// export const BottomTabRoutes = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarLabelPosition: "beside-icon",
//         tabBarStyle: {
//           height: 88,
//           paddingVertical: Platform.OS === "ios" ? 20 : 0,
//         },
//       }}
//     >

//     </Tab.Navigator>
//   );
// };
