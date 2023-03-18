import { ButtonPrimary } from "@Components/ui/atom/Button";
import { auth } from "../../config/firebase";
import { Button } from "react-native";
import { Container, Title } from "./styles";
import { useAuth } from "@Context/auth";

export const Home = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Title>Home</Title>
      <ButtonPrimary onPress={signOut} />
    </Container>
  );
};
