import React, { useState } from "react";

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

export const AddNewChargeModal = () => {
  const weighttmp = 40;

  const [weight, setWeight] = useState("");

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
          <MoreButton onPress={() => {}}>
            <Icon name="plus-circle" size={50} />
          </MoreButton>
          <ChargeValue
            value={weight}
            onChangeText={(text) => setWeight(text)}
            placeholder="0.0kg"
            keyboardType="numeric"
          />
          <LessButton onPress={() => {}}>
            <Icon name="minus-circle" size={50} />
          </LessButton>
        </ChangeChargeContainer>
        <ConfirmButton>
          <ConfirmButtonText>Confirmar</ConfirmButtonText>
        </ConfirmButton>
      </Content>
    </Container>
  );
};
