import React from "react";

import {
  AnotreinoLogoImage,
  Container,
  DescriptionText,
  ImageContainer,
  TitleText,
} from "./styles";

const FourthSlide = () => {
  return (
    <Container>
      <TitleText>Dieta</TitleText>
      <DescriptionText>
        Anote sua dieta e veja sua frequência de exercícios!
      </DescriptionText>
      <ImageContainer>
        <AnotreinoLogoImage source={require("../../../../assets/dieta.png")} />
      </ImageContainer>
    </Container>
  );
};

export default FourthSlide;
