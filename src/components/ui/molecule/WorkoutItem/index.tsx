import React from "react";
import { WorkoutItemContainer, ItemName } from "./styles";
import { Trash } from "phosphor-react-native";
import { IFicha } from "interfaces";

interface WorkoutItemProps {
  ficha: IFicha;
  handleOnSelectWorkout: (ficha: IFicha) => void;
}

export const WorkoutItem = ({
  handleOnSelectWorkout,
  ficha,
}: WorkoutItemProps) => {
  return (
    <WorkoutItemContainer onPress={() => handleOnSelectWorkout(ficha)}>
      <ItemName>{ficha.title}</ItemName>
      <Trash />
    </WorkoutItemContainer>
  );
};
