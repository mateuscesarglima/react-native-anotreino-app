import { ButtonPrimary } from "@Components/ui/atom/Button";

import { Container, Title } from "./styles";
import { useAuth } from "@Context/auth";

export const Home = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Title>Home</Title>
      <ButtonPrimary onPress={signOut} title="Sair" />
    </Container>
  );
};
