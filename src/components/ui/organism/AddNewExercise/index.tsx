import React from "react";

import {
  Container,
  Title,
  Input,
  ButtonContainer,
  CancelButton,
  ApplyButton,
  ButtonText,
} from "./styles";
import { IExercise } from "interfaces";
import uuid from "react-native-uuid";
import { AddNewExerciseModalProps } from "../AddNewExerciseModal";

interface AddNewExerciseProps extends AddNewExerciseModalProps {}

export const AddNewExercise = ({
  showModal,
  setShowModal,
  HandleAddNewExercise,
  setNewExercise,
  newExercise,
}: AddNewExerciseProps) => {
  return (
    <Container>
      <Title>Ficha</Title>
      <Input
        placeholder="Informe o nome da ficha"
        onChangeText={setNewExercise}
      />
      <ButtonContainer>
        <CancelButton onPress={() => setShowModal(!showModal)}>
          <ButtonText>Cancelar</ButtonText>
        </CancelButton>
        <ApplyButton>
          <ButtonText>Criar</ButtonText>
        </ApplyButton>
      </ButtonContainer>
    </Container>
  );
};
