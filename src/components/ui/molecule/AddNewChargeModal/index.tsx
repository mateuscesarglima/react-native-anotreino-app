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
  const [weight, setWeight] = useState(0);

  const onChangeValue = () => {
    console.log("APERTOU");
  };

  console.log(weight);
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
          <MoreButton
            onPress={() => {
              setWeight(weight >= 0 ? weight + 0.5 : 0.0);
            }}
          >
            <Icon name="plus-circle" size={50} />
          </MoreButton>
          <ChargeValue
            placeholder="0.0kg"
            value={weight.toString()}
            keyboardType="numeric"
            onChange={(value) => setWeight(parseInt(value.nativeEvent.text))}
          />
          <LessButton
            onPress={() => {
              setWeight(weight < 0 ? 0.0 : weight - 0.5);
            }}
          >
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
