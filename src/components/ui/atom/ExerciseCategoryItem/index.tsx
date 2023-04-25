import React from "react";
import { Container, Text } from "./styles";

interface ExerciseCategoryItemProps {
  item: {
    label: string;
    key: string;
  };
  handleShowExerciseSelectModal: (exerciseName: string) => void;
}

export const ExerciseCategoryItem = ({
  item,
  handleShowExerciseSelectModal,
}: ExerciseCategoryItemProps) => {
  return (
    <Container
      activeOpacity={0.8}
      onPress={() => handleShowExerciseSelectModal(item.label)}
    >
      <Text>{item.label}</Text>
    </Container>
  );
};
