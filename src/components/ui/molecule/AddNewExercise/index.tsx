import React from "react";

import { IExerciseCategory } from "interfaces";
import { RFValue } from "react-native-responsive-fontsize";
import { AddNewExerciseModalProps } from "../../organism/AddNewExerciseModal";

import {
  Container,
  Header,
  Icon,
  Main,
  HeaderText,
  BackButton,
} from "./styles";
import { ExerciseCategoryList } from "../ExerciseCategoryList";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

interface AddNewExerciseProps extends AddNewExerciseModalProps {
  exerciseCategory: IExerciseCategory[];
}

export const AddNewExercise = ({
  showModal,
  setShowModal,
  HandleAddNewExercise,
  setNewExercise,
  newExercise,
  exerciseCategory,
}: AddNewExerciseProps) => {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => setShowModal(!showModal)}>
          <Icon name="chevron-left" size={RFValue(50)} />
        </BackButton>
        <HeaderText>Exercícios</HeaderText>
      </Header>
      <Main>
        <ExerciseCategoryList exerciseCategory={exerciseCategory} />
      </Main>
    </Container>
  );
};
