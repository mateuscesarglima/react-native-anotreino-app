import { IExerciseCategory } from "interfaces";
import { FlatListProps } from "react-native";
import { FlatList } from "react-native";
import styled from "styled-components/native";

export const ExerciseCategoryListContainer = styled(
  FlatList as new (
    props: FlatListProps<IExerciseCategory>
  ) => FlatList<IExerciseCategory>
)``;
