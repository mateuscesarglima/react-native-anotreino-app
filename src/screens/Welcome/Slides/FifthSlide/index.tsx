import React from "react";

import {
  AnotreinoLogoImage,
  Container,
  EnterButton,
  EnterButtonText,
  ImageContainer,
  RegisterButton,
  RegisterButtonText,
  TitleText,
} from "./styles";
import { Text } from "react-native";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { routeCodes } from "@Constants/routes";

const FourthSlide = () => {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  return (
    <Container>
      <TitleText>Acesse sua conta</TitleText>
      <EnterButton onPress={() => navigate(routeCodes.LOGIN)}>
        <EnterButtonText>Entrar</EnterButtonText>
      </EnterButton>
      <Text
        style={{
          alignSelf: "center",
          marginTop: 10,
          fontSize: 15,
          color: "#FFF",
          fontWeight: "bold",
        }}
      >
        ou
      </Text>
      <RegisterButton onPress={() => navigate(routeCodes.REGISTER)}>
        <RegisterButtonText>Cadastre-se</RegisterButtonText>
      </RegisterButton>
      <ImageContainer>
        <AnotreinoLogoImage source={require("../../../../assets/entrar.png")} />
      </ImageContainer>
    </Container>
  );
};

export default FourthSlide;
