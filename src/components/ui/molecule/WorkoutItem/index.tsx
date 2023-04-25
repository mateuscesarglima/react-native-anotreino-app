import React from "react";
import { WorkoutItemContainer, ItemName, Container } from "./styles";
import { Trash } from "phosphor-react-native";
import { IFicha } from "interfaces";
import { TouchableOpacity } from "react-native-gesture-handler";

interface WorkoutItemProps {
  ficha: IFicha;
  handleOnSelectWorkout: (ficha: IFicha) => void;
  handleRemoveFicha: (fichaId: string) => void;
  handleShowModalDialog: (fichaId: string) => void;
}

export const WorkoutItem = ({
  handleOnSelectWorkout,
  ficha,
  handleRemoveFicha,
  handleShowModalDialog,
}: WorkoutItemProps) => {
  return (
    <Container>
      <WorkoutItemContainer onPress={() => handleOnSelectWorkout(ficha)}>
        <ItemName>{ficha.title}</ItemName>
      </WorkoutItemContainer>
      <TouchableOpacity onPress={() => handleShowModalDialog(ficha.id)}>
        <Trash />
      </TouchableOpacity>
    </Container>
  );
};
