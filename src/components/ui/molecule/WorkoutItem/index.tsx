import React from "react";
import { WorkoutItemContainer, ItemName, Container } from "./styles";
import { Trash } from "phosphor-react-native";
import { IFicha, ISheet } from "interfaces";
import { TouchableOpacity } from "react-native-gesture-handler";

interface WorkoutItemProps {
  sheet: ISheet;
  handleOnSelectWorkout: (ficha: ISheet) => void;
  handleShowModalDialog: (fichaId: string) => void;
}

export const WorkoutItem = ({
  handleOnSelectWorkout,
  sheet,
  handleShowModalDialog,
}: WorkoutItemProps) => {
  return (
    <Container>
      <WorkoutItemContainer onPress={() => handleOnSelectWorkout(sheet)}>
        <ItemName>{sheet.name}</ItemName>
      </WorkoutItemContainer>
      <TouchableOpacity onPress={() => handleShowModalDialog(sheet.name)}>
        <Trash />
      </TouchableOpacity>
    </Container>
  );
};
