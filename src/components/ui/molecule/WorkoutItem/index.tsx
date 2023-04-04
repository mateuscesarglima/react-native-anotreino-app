import React from "react";
import { WorkoutItemContainer, ItemName } from "./styles";

interface WorkoutItemProps {
  itemName: string;
}

export const WorkoutItem = ({ itemName }: WorkoutItemProps) => {
  return (
    <WorkoutItemContainer>
      <ItemName>{itemName}</ItemName>
    </WorkoutItemContainer>
  );
};
