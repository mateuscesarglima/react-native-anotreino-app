import { LoginButton } from "@Components/ui/atom/LoginButton";
import { LoginInputForm } from "@Components/ui/molecule/LoginInputForm";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Control, FieldValues, useForm } from "react-hook-form";
import * as Yup from "yup";
import { Container, Form, LogoBox, LogoImg } from "./styles";

export interface FormData {
  name: string;
  password: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Email é obrigatório"),
  password: Yup.string().required("Informe uma senha válida"),
});

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const formControll = control as unknown as Control<FieldValues, any>;

  const loginHandle = (form: FormData) => {
    console.log("Realizar login");
    reset();
  };

  return (
    <Container>
      <LogoBox>
        <LogoImg source={require("../../assets/logo.png")} />
      </LogoBox>
      <Form>
        <LoginInputForm
          placeholder="Email"
          name="email"
          control={formControll}
          error={errors.name && errors?.name.message}
        />
        <LoginInputForm
          placeholder="Senha"
          name="password"
          control={formControll}
          error={errors.password && errors?.password.message}
        />
      </Form>
      <LoginButton onPress={handleSubmit(loginHandle)} />
    </Container>
  );
};
