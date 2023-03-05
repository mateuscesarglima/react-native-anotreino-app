import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import { LoginInput } from "@Components/ui/atom/LoginInput";
import { Container, Error } from "./styles";

interface LoginInputFormProps extends TextInputProps {
  control: Control;
  name: string;
  error?: string;
}

export const LoginInputForm = ({
  control,
  name,
  error,
  ...rest
}: LoginInputFormProps) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <LoginInput onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};
