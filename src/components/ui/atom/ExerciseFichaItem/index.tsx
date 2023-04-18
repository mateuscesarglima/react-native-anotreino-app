import React from "react";
import {
  Container,
  Img,
  Header,
  Title,
  Description,
  Main,
  Footer,
  LeftSide,
  RightSide,
  MainBox,
  Icon,
} from "./styles";

interface IExerciseFichaItem {
  img: any;
  name: string;
  description: string;
}

export const ExerciseFichaItem = ({
  img,
  name,
  description,
}: IExerciseFichaItem) => {
  return (
    <Container>
      <MainBox>
        <Img>IMG</Img>
        <Main>
          <Header>
            <Title>{name}</Title>
            <Icon name="edit" size={20} />
          </Header>
          <Description>{description.slice(0, 60)} ...</Description>
        </Main>
      </MainBox>
      <Footer>
        <LeftSide>Left</LeftSide>
        <RightSide>Right</RightSide>
      </Footer>
    </Container>
  );
};
