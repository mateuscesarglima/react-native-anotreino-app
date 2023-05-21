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
  SaibaMaisButton,
  SaibaMaisText,
} from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";

interface IExerciseFichaItem {
  img: any;
  name: string;
  description: string;
  onOpen: (videoId: string, name: string, description: string) => void;
  videoId: string;
}

export const ExerciseFichaItem = ({
  img,
  name,
  description,
  onOpen,
  videoId,
}: IExerciseFichaItem) => {
  return (
    <Container>
      <MainBox>
        <Main>
          <Header>
            <Title>{name}</Title>
            <TouchableOpacity
              onPress={() => onOpen(description, name, videoId)}
            >
              <Icon name="info" size={25} />
            </TouchableOpacity>
          </Header>
          <Description>
            {description.slice(0, 80)}...
            <SaibaMaisButton onPress={() => onOpen(description, name, videoId)}>
              <SaibaMaisText>Saiba Mais</SaibaMaisText>
            </SaibaMaisButton>
          </Description>
        </Main>
      </MainBox>
      <Footer>
        <LeftSide>3x10</LeftSide>
        <RightSide>0.0kg</RightSide>
      </Footer>
    </Container>
  );
};
