import React from "react";
import { TextInputProps } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components";

interface loginInputProps extends TextInputProps {}

export const Input = ({ ...rest }: loginInputProps) => {
  const theme = useTheme();
  return <Container {...rest} placeholderTextColor={theme.colors.text} />;
};
