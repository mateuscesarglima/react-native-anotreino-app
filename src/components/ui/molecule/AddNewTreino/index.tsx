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

import uuid from "react-native-uuid";
import { IFicha, ISheet } from "interfaces";

interface AddNewTreinoProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  handleAddNewSheet: (newFicha: ISheet) => void;
  setNewTreino: (value: string) => void;
  newTreino: string;
}
export const AddNewTreino = ({
  setShowModal,
  showModal,
  handleAddNewSheet,
  setNewTreino,
  newTreino,
}: AddNewTreinoProps) => {
  return (
    <Container>
      <Title>Ficha</Title>
      <Input
        placeholder="Informe o nome da ficha"
        onChangeText={setNewTreino}
      />
      <ButtonContainer>
        <CancelButton onPress={() => setShowModal(!showModal)}>
          <ButtonText>Cancelar</ButtonText>
        </CancelButton>
        <ApplyButton>
          <ButtonText
            onPress={() => {
              handleAddNewSheet({
                id: uuid.v4().toString(),
                name: newTreino,
                exercises: [],
              }),
                setShowModal(!showModal);
            }}
          >
            Criar
          </ButtonText>
        </ApplyButton>
      </ButtonContainer>
    </Container>
  );
};
