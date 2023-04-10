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
import { ITreino } from "interfaces";
import uuid from "react-native-uuid";

interface AddNewTreinoProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  handleAddNewTreino: (newTreino: ITreino) => void;
  setNewTreino: (value: string) => void;
  newTreino: string;
}
export const AddNewTreino = ({
  setShowModal,
  showModal,
  handleAddNewTreino,
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
              handleAddNewTreino({
                id: uuid.v4().toString(),
                title: newTreino,
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
