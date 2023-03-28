import { ButtonPrimary } from "@Components/ui/atom/Button";
import { InputForm } from "@Components/ui/molecule/InputForm";
import { useAuth } from "@Context/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Control, FieldValues, useForm } from "react-hook-form";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Yup from "yup";
import {
  BackButton,
  ButtonContainer,
  Container,
  Form,
  Icon,
  Title,
} from "./styles";

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Informe um email válido")
    .required("Email é obrigatório"),
  password: Yup.string().required("Informe uma senha válida"),
  confirmPassword: Yup.string()
    .required("Confirme sua senha")
    .oneOf([Yup.ref("password")], "Suas senhas não coincidem"),
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
  const { goBack }: NavigationProp<ParamListBase> = useNavigation();

  const formControll = control as unknown as Control<FieldValues, any>;

  const registerHandle = async (form: RegisterFormData) => {
    const { email, password } = form;
    await register({ email, password });
    reset();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <BackButton onPress={goBack}>
          <Icon name="chevron-left" size={RFValue(40)} />
        </BackButton>
        <Title>Registrar</Title>
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
            error={errors.password && errors?.password?.message}
            secureTextEntry
          />

          <InputForm
            placeholder="Confirme a sua senha"
            name="confirmPassword"
            control={formControll}
            error={errors.confirmPassword && errors?.confirmPassword?.message}
            secureTextEntry
          />
          <ButtonContainer>
            <ButtonPrimary
              title="Registrar"
              onPress={handleSubmit(registerHandle)}
            />
          </ButtonContainer>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
};
