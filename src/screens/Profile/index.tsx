import { ButtonPrimary } from "@Components/ui/atom/Button";
import { useAuth } from "@Context/auth";
import React from "react";
import { Container, Title } from "./styles";

export const Profile = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Title>Profile</Title>
      <ButtonPrimary onPress={signOut} title="Sair" />
    </Container>
  );
};
