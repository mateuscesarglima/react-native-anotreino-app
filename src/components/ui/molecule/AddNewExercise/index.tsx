import React from "react";

import { IExerciseCategory } from "interfaces";
import { RFValue } from "react-native-responsive-fontsize";
import { AddNewExerciseModalProps } from "../../organism/AddNewExerciseModal";

import { ExerciseCategoryList } from "../ExerciseCategoryList";
import {
  BackButton,
  Container,
  Header,
  HeaderText,
  Icon,
  Main,
} from "./styles";

interface AddNewExerciseProps extends AddNewExerciseModalProps {
  exerciseCategory: IExerciseCategory[];
}

export const AddNewExercise = ({
  showModal,
  setShowModal,
  exerciseCategory,
  handleShowExerciseSelectModal,
}: AddNewExerciseProps) => {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => setShowModal(!showModal)}>
          <Icon name="chevron-left" size={RFValue(40)} />
        </BackButton>
        <HeaderText>Exercícios</HeaderText>
      </Header>
      <Main>
        <ExerciseCategoryList
          exerciseCategory={exerciseCategory}
          handleShowExerciseSelectModal={handleShowExerciseSelectModal}
        />
      </Main>
    </Container>
  );
};
