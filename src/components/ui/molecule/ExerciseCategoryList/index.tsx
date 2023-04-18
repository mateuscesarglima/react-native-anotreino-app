import React from "react";
import { Container, ExerciseCategoryListContainer } from "./styles";
import { IExerciseCategory } from "interfaces";
import { ExerciseCategoryItem } from "@Components/ui/atom/ExerciseCategoryItem";

interface ExerciseCategoryListProps {
  exerciseCategory: IExerciseCategory[];
  handleShowExerciseSelectModal: (exerciseName: string) => void;
}

export const ExerciseCategoryList = ({
  exerciseCategory,
  handleShowExerciseSelectModal,
}: ExerciseCategoryListProps) => {
  return (
    <Container>
      <ExerciseCategoryListContainer
        data={exerciseCategory}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <ExerciseCategoryItem
            item={item}
            handleShowExerciseSelectModal={handleShowExerciseSelectModal}
          />
        )}
      />
    </Container>
  );
};
