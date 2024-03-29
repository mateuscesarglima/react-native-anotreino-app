import { Exercises } from "@Screens/Exercises";
import { Login } from "@Screens/Login";
import { Register } from "@Screens/Register";
import { SelectCategory } from "@Screens/SelectCategory";
import { SelectedExercise } from "@Screens/SelectedExercise";
import { Workout } from "@Screens/Workout";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import React from "react";
import { BottomTabRoutes } from "./BottomTabRoutes";
import { Charge } from "@Screens/Charge";
import { Notes } from "@Screens/Notes";
import { TimerSelect } from "@Screens/TimerSelect";
import { SelectLevel } from "@Screens/SelectLevel";
import { HitResume } from "@Screens/HitResume";
import { Welcome } from "@Screens/Welcome";

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome"
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
};

export const StackRoutes = () => {
  const transitionSpec = {
    open: {
      animation: "timing",
      config: {
        duration: 1,
      },
    },
    close: {
      animation: "timing",
      config: {
        duration: 1,
      },
    },
  };

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        transitionSpec: {
          open: {
            animation: "timing",
            config: {
              duration: 150,
            },
          },
          close: {
            animation: "timing",
            config: {
              duration: 150,
            },
          },
        },
      }}
      initialRouteName="Home"
    >
      <Screen name="TabRoutes" component={BottomTabRoutes} />
      <Screen name="SelectCategory" component={SelectCategory} />
      <Screen name="Exercises" component={Exercises} />
      <Screen name="SelectedExercise" component={SelectedExercise} />
      <Screen name="Workout" component={Workout} />
      <Screen name="Charge" component={Charge} />
      <Screen name="Notes" component={Notes} />
      <Screen name="TimerSelect" component={TimerSelect} />
      <Screen name="SelectLevel" component={SelectLevel} />
      <Screen name="HitResume" component={HitResume} />
    </Navigator>
  );
};
