import React from "react";

import {
  AnotreinoLogoImage,
  Container,
  DescriptionText,
  ImageContainer,
  TitleText,
} from "./styles";

const ThirdSlide = () => {
  return (
    <Container>
      <TitleText>Hit</TitleText>
      <DescriptionText>
        Treino HIT de corrida com apenas 1 clique! Tenha o controle do seu ritmo
        através de nossas tabelas com informações sobre tempo e velocidade.
      </DescriptionText>
      <ImageContainer>
        <AnotreinoLogoImage source={require("../../../../assets/hit.png")} />
      </ImageContainer>
    </Container>
  );
};

export default ThirdSlide;
