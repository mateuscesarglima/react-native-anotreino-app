import React from "react";
import { ExerciseCategoryListContainer } from "./styles";
import { IExerciseCategory } from "interfaces";
import { ExerciseCategoryItem } from "@Components/ui/atom/ExerciseCategoryItem";

interface ExerciseCategoryListProps {
  exerciseCategory: IExerciseCategory[];
}

export const ExerciseCategoryList = ({
  exerciseCategory,
}: ExerciseCategoryListProps) => {
  return (
    <ExerciseCategoryListContainer
      data={exerciseCategory}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => <ExerciseCategoryItem label={item.label} />}
    />
  );
};
