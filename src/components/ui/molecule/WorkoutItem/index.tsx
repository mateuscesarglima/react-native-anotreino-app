import React from "react";
import { WorkoutItemContainer, ItemName } from "./styles";
import { Trash } from "phosphor-react-native";

interface WorkoutItemProps {
  itemName: string;
}

export const WorkoutItem = ({ itemName }: WorkoutItemProps) => {
  return (
    <WorkoutItemContainer>
      <ItemName>{itemName}</ItemName>
      <Trash />
    </WorkoutItemContainer>
  );
};
