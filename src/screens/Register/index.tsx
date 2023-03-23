import { ButtonPrimary } from "@Components/ui/atom/Button";
import { InputForm } from "@Components/ui/molecule/InputForm";
import { useAuth } from "@Context/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { Control, FieldValues, useForm } from "react-hook-form";
import * as Yup from "yup";
import { Container, Form } from "./styles";

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = Yup.object().shape({
  email: Yup.string().required("Email é obrigatório"),
  password: Yup.string().required("Informe uma senha válida"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Senhas não coincidem"
  ),
});

export const Register = () => {
  const { register } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
  });

  const formControll = control as unknown as Control<FieldValues, any>;

  const registerHandle = async (form: RegisterFormData) => {
    const { email, password } = form;
    await register({ email, password });
    reset();
  };

  return (
    <Container>
      <Form>
        <InputForm
          placeholder="Email"
          name="email"
          control={formControll}
          error={errors.email && errors?.email?.message}
        />

        <InputForm
          placeholder="Senha"
          name="password"
          control={formControll}
          error={errors.email && errors?.password?.message}
          secureTextEntry
        />

        <InputForm
          placeholder="Confirme a sua senha"
          name="confirmPassword"
          control={formControll}
          error={errors.email && errors?.confirmPassword?.message}
          secureTextEntry
        />

        <ButtonPrimary
          title="Registrar"
          onPress={handleSubmit(registerHandle)}
        />
      </Form>
    </Container>
  );
};
