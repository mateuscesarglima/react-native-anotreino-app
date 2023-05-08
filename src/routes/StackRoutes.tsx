import { Exercises } from "@Screens/Exercises";
import { Hit } from "@Screens/Hit";
import { Home } from "@Screens/Home";
import { Login } from "@Screens/Login";
import { Profile } from "@Screens/Profile";
import { Register } from "@Screens/Register";
import { SelectCategory } from "@Screens/SelectCategory";
import { SelectedExercise } from "@Screens/SelectedExercise";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
};

export const HomeNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="HomeNav" component={Home} />
      <Screen name="Exercises" component={Exercises} />
      <Screen name="SelectCategory" component={SelectCategory} />
      <Screen name="SelectedExercise" component={SelectedExercise} />
    </Navigator>
  );
};

export const HitNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="HitNav" component={Hit} />
    </Navigator>
  );
};

export const ProfileNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="ProfileNav" component={Profile} />
    </Navigator>
  );
};
