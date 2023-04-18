import React from "react";
import {
  Container,
  Content,
  ExerciseTitle,
  Description,
  AddButton,
  ButtonText,
  ImgBox,
  Img,
} from "./styles";
import { IExercise } from "interfaces";

interface IExerciseCardProps extends IExercise {
  handleAddNewExercise: (newExercise: IExercise) => void;
}

export const ExerciseCard = ({
  id,
  description,
  name,
  handleAddNewExercise,
}: IExerciseCardProps) => {
  return (
    <Container>
      <ImgBox>
        <Img>IMG</Img>
      </ImgBox>
      <Content>
        <ExerciseTitle>{name}</ExerciseTitle>
        <Description>{description.slice(0, 50)}...</Description>
      </Content>
      <AddButton
        onPress={() => {
          handleAddNewExercise({
            id: id,
            description: description,
            name: name,
          });
        }}
      >
        <ButtonText>ADD</ButtonText>
      </AddButton>
    </Container>
  );
};
