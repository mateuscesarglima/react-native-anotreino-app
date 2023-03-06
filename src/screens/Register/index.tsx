import { LoginInputForm } from "@Components/ui/molecule/LoginInputForm";
import { useAuth } from "@Context/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { Control, FieldValues } from "react-hook-form/dist/types";
import { useForm } from "react-hook-form/dist/useForm";
import * as Yup from "yup";
import { Container, Form, Button } from "./styles";

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
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
  });

  const formControll = control as unknown as Control<FieldValues, any>;

  const registerHandle = async (form: RegisterFormData) => {
    await register(form);
  };

  return (
    <Container>
      <Form>
        <LoginInputForm
          placeholder="Email"
          name="email"
          control={formControll}
          error={errors.email && errors?.email.message}
        />

        <LoginInputForm
          placeholder="Email"
          name="email"
          control={formControll}
          error={errors.email && errors?.email.message}
        />

        <LoginInputForm
          placeholder="Email"
          name="email"
          control={formControll}
          error={errors.email && errors?.email.message}
        />

        <Button onPress={handleSubmit(registerHandle)} />
      </Form>
    </Container>
  );
};
