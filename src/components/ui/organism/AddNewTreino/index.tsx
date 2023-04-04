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

interface AddNewTreinoProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}
export const AddNewTreino = ({
  setShowModal,
  showModal,
}: AddNewTreinoProps) => {
  return (
    <Container>
      <Title>Ficha</Title>
      <Input placeholder="Informe o nome da ficha" />
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
