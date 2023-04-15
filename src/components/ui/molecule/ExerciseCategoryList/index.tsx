import React from "react";
import { Container, ExerciseCategoryListContainer } from "./styles";
import { IExerciseCategory } from "interfaces";
import { ExerciseCategoryItem } from "@Components/ui/atom/ExerciseCategoryItem";

interface ExerciseCategoryListProps {
  exerciseCategory: IExerciseCategory[];
}

export const ExerciseCategoryList = ({
  exerciseCategory,
}: ExerciseCategoryListProps) => {
  return (
    <Container>
      <ExerciseCategoryListContainer
        data={exerciseCategory}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <ExerciseCategoryItem label={item.label} />}
      />
    </Container>
  );
};
