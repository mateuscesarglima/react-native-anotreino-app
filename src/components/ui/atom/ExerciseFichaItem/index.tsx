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
  WeightButton,
} from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { routeCodes } from "@Constants/routes";

interface IExerciseFichaItem {
  img: any;
  name: string;
  description: string;
  onOpen: (videoId: string, name: string, description: string) => void;
  videoId: string;
  weight: number;
}

export const ExerciseFichaItem = ({
  img,
  name,
  description,
  onOpen,
  videoId,
  weight,
}: IExerciseFichaItem) => {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
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
        <WeightButton onPress={() => navigate(routeCodes.CHARGE)}>
          <RightSide>{weight.toFixed(1)}kg</RightSide>
        </WeightButton>
      </Footer>
    </Container>
  );
};
