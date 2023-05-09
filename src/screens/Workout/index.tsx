import React from "react";

import {
  BackButton,
  Container,
  Content,
  DoneExercises,
  Footer,
  Header,
  Icon,
  Main,
  Title,
} from "./styles";
import { ExerciseCard } from "./components/ExerciseCard";

export const Workout = () => {
  return (
    <Container>
      <Header>
        <BackButton>
          <Icon name="chevron-left" size={30} />
        </BackButton>
        <Content>
          <Title>TREINO B</Title>
          <DoneExercises>5 de 8</DoneExercises>
        </Content>
        <Icon name="edit" size={30} />
      </Header>
      <Main>
        <ExerciseCard />
      </Main>
      <Footer></Footer>
    </Container>
  );
};
