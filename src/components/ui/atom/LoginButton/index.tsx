import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Button, Container, Text } from "./styles";

interface LoginButtonProps extends TouchableOpacityProps {}

export const LoginButton = ({ ...rest }: LoginButtonProps) => {
  return (
    <Container>
      <Button {...rest} activeOpacity={0.7}>
        <Text>Entrar</Text>
      </Button>
    </Container>
  );
};
