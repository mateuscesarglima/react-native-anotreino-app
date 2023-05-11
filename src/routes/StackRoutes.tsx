import { Exercises } from "@Screens/Exercises";
import { Login } from "@Screens/Login";
import { Register } from "@Screens/Register";
import { SelectCategory } from "@Screens/SelectCategory";
import { SelectedExercise } from "@Screens/SelectedExercise";
import { Workout } from "@Screens/Workout";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { BottomTabRoutes } from "./BottomTabRoutes";

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
};

export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="TabRoutes" component={BottomTabRoutes} />
      <Screen name="SelectCategory" component={SelectCategory} />
      <Screen name="Exercises" component={Exercises} />
      <Screen name="SelectedExercise" component={SelectedExercise} />
      <Screen name="Workout" component={Workout} />
    </Navigator>
  );
};
