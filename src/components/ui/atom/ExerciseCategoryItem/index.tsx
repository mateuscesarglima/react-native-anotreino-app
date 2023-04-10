import React from "react";
import { Container, Text } from "./styles";

interface ExerciseCategoryItemProps {
  label: string;
}

export const ExerciseCategoryItem = ({ label }: ExerciseCategoryItemProps) => {
  return (
    <Container>
      <Text>{label}</Text>
    </Container>
  );
};
