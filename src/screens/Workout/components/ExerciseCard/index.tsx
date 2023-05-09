import React from "react";
import {
  Body,
  Container,
  Content,
  ExerciseName,
  Footer,
  Header,
  Repetition,
  RepetitionText,
  Rest,
  RestText,
  Serie,
  SerieText,
} from "./styles";

export const ExerciseCard = () => {
  return (
    <Container>
      <Content>
        <Header></Header>
        <Body>
          <ExerciseName>Cadeira Extensora</ExerciseName>
          <Serie>
            <SerieText>Série</SerieText>
          </Serie>
          <Repetition>
            <RepetitionText>Repetição</RepetitionText>
          </Repetition>
          <Rest>
            <RestText>Descanso</RestText>
          </Rest>
        </Body>
        <Footer></Footer>
      </Content>
    </Container>
  );
};
