import React from "react";

import {
  Container,
  AddButton,
  Img,
  ItemDescription,
  ItemName,
  Content,
  Icon,
} from "./styles";
import { useRoute } from "@react-navigation/native";
import { IExercise } from "@Interfaces/index";

interface ExerciseListItemProps {
  exercise: IExercise;
}

export const ExerciseListItem = ({ exercise }: ExerciseListItemProps) => {
  const { description, name } = exercise;
  console.log(exercise);
  return (
    <Container>
      <Img>IMG</Img>
      <Content>
        <ItemName>{name}</ItemName>
        <ItemDescription>{description}</ItemDescription>
      </Content>
      <AddButton activeOpacity={0.7}>
        <Icon name="plus-circle" color="#FFF" size={40} />
      </AddButton>
    </Container>
  );
};
