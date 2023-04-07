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
import { salvarFicha } from "@Context/service/firestore";

interface AddNewTreinoProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  setNewTreino: (value: string) => void;
  newTreino: string;
}
export const AddNewTreino = ({
  setShowModal,
  showModal,
  newTreino,
}: AddNewTreinoProps) => {
  const handleAddNewTreino = async (newTreino: ITreino) => {
    try {
      const response = await salvarFicha(newTreino);
      console.log(response);
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const [tituloFicha, setTituloFicha] = React.useState("");

  return (
    <Container>
      <Title>Ficha</Title>
      <Input
        placeholder="Informe o nome da ficha"
        onChangeText={(value) => setTituloFicha(value)}
      />
      <ButtonContainer>
        <CancelButton onPress={() => setShowModal(false)}>
          <ButtonText>Cancelar</ButtonText>
        </CancelButton>
        <ApplyButton>
          <ButtonText
            onPress={() => {
              handleAddNewTreino({
                id: uuid.v4().toString(),
                title: tituloFicha,
              });
            }}
          >
            Criar
          </ButtonText>
        </ApplyButton>
      </ButtonContainer>
    </Container>
  );
};
