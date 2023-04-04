import { useAuth } from "@Context/auth";
import React from "react";
import { TouchableOpacityProps, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import { Button, Container, Text } from "./styles";

interface ButtonPrimaryProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export const ButtonPrimary = ({
  title,
  isLoading,
  ...rest
}: ButtonPrimaryProps) => {
  const theme = useTheme();
  return (
    <Container>
      <Button {...rest} activeOpacity={0.7}>
        <Text style={{ alignItems: "center", justifyContent: "center" }}>
          {isLoading ? (
            <ActivityIndicator size={"small"} color={theme.colors.white} />
          ) : (
            title
          )}
        </Text>
      </Button>
    </Container>
  );
};
