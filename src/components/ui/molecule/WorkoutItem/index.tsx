import React from "react";
import { WorkoutItemContainer, ItemName } from "./styles";
import { Trash } from "phosphor-react-native";

interface WorkoutItemProps {
  itemId: string;
  itemName: string;
  handleOnSelectWorkout: (id: string, name: string) => void;
}

export const WorkoutItem = ({
  itemId,
  itemName,
  handleOnSelectWorkout,
}: WorkoutItemProps) => {
  return (
    <WorkoutItemContainer
      onPress={() => handleOnSelectWorkout(itemId, itemName)}
    >
      <ItemName>{itemName}</ItemName>
      <Trash />
    </WorkoutItemContainer>
  );
};
