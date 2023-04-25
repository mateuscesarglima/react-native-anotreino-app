import { IExerciseCategory } from "interfaces";
import { FlatListProps } from "react-native";
import { FlatList } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.View``;

export const ExerciseCategoryListContainer = styled(
  FlatList as new (
    props: FlatListProps<IExerciseCategory>
  ) => FlatList<IExerciseCategory>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 100,
  },
})``;
