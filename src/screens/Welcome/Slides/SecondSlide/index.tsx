import React from "react";

import {
  AnotreinoLogoImage,
  Container,
  DescriptionText,
  ImageContainer,
  TitleText,
} from "./styles";

const SecondSlide = () => {
  return (
    <Container>
      <TitleText>Anote</TitleText>
      <DescriptionText>
        Sua ficha de treino digital! Salve seus exercícios, séries, carga e
        repetições em um só lugar!
      </DescriptionText>
      <ImageContainer>
        <AnotreinoLogoImage
          source={require("../../../../assets/anotacao.png")}
        />
      </ImageContainer>
    </Container>
  );
};

export default SecondSlide;
