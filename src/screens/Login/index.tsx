import { ButtonPrimary } from "@Components/ui/atom/Button";
import { InputForm } from "@Components/ui/molecule/InputForm";
import { useAuth } from "@Context/auth";

import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Control, FieldValues, useForm } from "react-hook-form";
import * as Yup from "yup";
import { Container, Form, LogoBox, LogoImg } from "./styles";

export interface FormData {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string().required("Email é obrigatório"),
  password: Yup.string().required("Informe uma senha válida"),
});

export const Login = () => {
  const { signIn } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const formControll = control as unknown as Control<FieldValues, any>;

  const loginHandle = async (form: FormData) => {
    await signIn(form);
    reset();
  };

  return (
    <Container>
      <LogoBox>
        <LogoImg source={require("../../assets/logo.png")} />
      </LogoBox>
      <Form>
        <InputForm
          placeholder="Email"
          name="email"
          control={formControll}
          error={errors.email && errors?.email.message}
        />
        <InputForm
          placeholder="Senha"
          name="password"
          control={formControll}
          error={errors.password && errors?.password.message}
          secureTextEntry
        />
        <ButtonPrimary onPress={handleSubmit(loginHandle)} />
      </Form>
    </Container>
  );
};
