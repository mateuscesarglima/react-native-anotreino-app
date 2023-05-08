import React from "react";

import { useSheet } from "@Context/sheets";
import { IExercise } from "@Interfaces/index";
import {
  AddButton,
  Container,
  Content,
  Icon,
  Img,
  ItemDescription,
  ItemName,
} from "./styles";

interface ExerciseListItemProps {
  exercise: IExercise;
  sheetName: string;
}

export const ExerciseListItem = ({
  exercise,
  sheetName,
}: ExerciseListItemProps) => {
  const { description, name, id } = exercise;
  const { handleAddNewExercise } = useSheet();
  return (
    <Container>
      <Img
        source={{
          uri: "https://img2.gratispng.com/20180713/thx/kisspng-pulldown-exercise-weight-training-latissimus-dorsi-neck-muscle-5b4922d8728b45.1547314915315197044692.jpg",
        }}
      />
      <Content>
        <ItemName>{name}</ItemName>
        <ItemDescription>{description}</ItemDescription>
      </Content>
      <AddButton
        activeOpacity={0.7}
        onPress={() => {
          handleAddNewExercise(exercise, sheetName);
        }}
      >
        <Icon name="plus-circle" color="#FFF" size={40} />
      </AddButton>
    </Container>
  );
};
