import { useAuth } from "@Context/auth";
import React from "react";
import { TouchableOpacityProps, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import { Button, Container, Text } from "./styles";

interface LoginButtonProps extends TouchableOpacityProps {}

export const LoginButton = ({ ...rest }: LoginButtonProps) => {
  const theme = useTheme();
  const { isLoading } = useAuth();

  return (
    <Container>
      <Button {...rest} activeOpacity={0.7}>
        <Text style={{ alignItems: "center", justifyContent: "center" }}>
          {isLoading ? (
            <ActivityIndicator size={"small"} color={theme.colors.white} />
          ) : (
            "Entrar"
          )}
        </Text>
      </Button>
    </Container>
  );
};
