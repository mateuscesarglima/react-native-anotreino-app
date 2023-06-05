import React from "react";

import {
  AnotreinoLogoImage,
  BoasVindasImage,
  Container,
  ImageContainer,
  WelcomeText,
} from "./styles";

const FirstSlide = () => {
  return (
    <Container>
      <WelcomeText>Boas Vindas ao</WelcomeText>
      <ImageContainer>
        <AnotreinoLogoImage source={require("../../../../assets/logo.png")} />
      </ImageContainer>
    </Container>
  );
};

export default FirstSlide;
