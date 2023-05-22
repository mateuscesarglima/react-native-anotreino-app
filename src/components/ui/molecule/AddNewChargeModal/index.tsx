import React, { useState } from "react";

import { useSheet } from "@Context/sheets";
import {
  ChangeChargeContainer,
  ChargeValue,
  ConfirmButton,
  ConfirmButtonText,
  Container,
  Content,
  ContentDescription,
  Header,
  Icon,
  LessButton,
  MoreButton,
  Title,
} from "./styles";
import { ICharge } from "@Interfaces/index";
import { format } from "date-fns";

interface AddNewChargeModalProps {
  charge: ICharge[];
  onClose: () => void;
  exerciseId: string;
  sheetId: string;
}

const MAX_LIMIT = 300;

export const AddNewChargeModal = ({
  charge,
  onClose,
  exerciseId,
  sheetId,
}: AddNewChargeModalProps) => {
  const [weight, setWeight] = useState(
    charge[charge.length - 1]?.weight.toFixed(1)
  );
  const [maskValue, setMaskValue] = useState("9.9");
  const { handleUpdateCharge } = useSheet();

  const incrementWeight = () => {
    setWeight(Number(parseFloat(weight) + 5).toFixed(1));
  };

  const decrementWeight = () => {
    setWeight(Number(parseFloat(weight) - 5).toFixed(1));
  };

  const handleOnConfirm = () => {
    const chargePayload: ICharge = {
      date: format(new Date(), "dd/MM"),
      weight: parseFloat(weight),
    };
    handleUpdateCharge(exerciseId, sheetId, chargePayload);
  };

  return (
    <Container>
      <Header>
        <Title>Inserir nova carga</Title>
      </Header>
      <Content>
        <ContentDescription>
          Registrando a carga podemos acompanhar sua evolução no exercício
        </ContentDescription>
        <ChangeChargeContainer>
          <MoreButton onPress={incrementWeight}>
            <Icon name="plus-circle" size={50} />
          </MoreButton>

          <ChargeValue
            value={weight}
            onChangeText={(text) => setWeight(text)}
            placeholder={charge[charge.length - 1]?.weight.toFixed(1)}
            placeholderTextColor={"#6f6f6f"}
            keyboardType="numeric"
          />

          <LessButton onPress={decrementWeight}>
            <Icon name="minus-circle" size={50} />
          </LessButton>
        </ChangeChargeContainer>
        <ConfirmButton onPress={() => handleOnConfirm()}>
          <ConfirmButtonText>Confirmar</ConfirmButtonText>
        </ConfirmButton>
      </Content>
    </Container>
  );
};
