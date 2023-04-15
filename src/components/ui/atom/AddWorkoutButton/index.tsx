import React from "react";
import { Icon, AddWorkoutButton } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

interface AddWorkoutButtonProps {
  handleOnPress: any;
}

export const ButtonAddWorkout = ({ handleOnPress }: AddWorkoutButtonProps) => {
  return (
    <AddWorkoutButton onPress={handleOnPress} activeOpacity={1}>
      <Icon name="plus-circle" size={RFValue(70)} />
    </AddWorkoutButton>
  );
};
