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
import { IFicha } from "interfaces";

interface AddNewTreinoProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  handleAddNewFicha: (newFicha: IFicha) => void;
  setNewTreino: (value: string) => void;
  newTreino: string;
}
export const AddNewTreino = ({
  setShowModal,
  showModal,
  handleAddNewFicha,
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
              handleAddNewFicha({
                id: uuid.v4().toString(),
                title: newTreino,
                exercicios: [],
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
