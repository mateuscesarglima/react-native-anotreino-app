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
import { ICharge } from "@Interfaces/index";

interface IExerciseFichaItem {
  id: string;
  img: any;
  name: string;
  description: string;
  onOpen: (videoId: string, name: string, description: string) => void;
  videoId: string;
  sheetId: string;
  charge: ICharge[];
}

export const ExerciseFichaItem = ({
  id,
  img,
  name,
  description,
  onOpen,
  videoId,
  sheetId,
  charge,
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
        <WeightButton
          onPress={() =>
            navigate(routeCodes.CHARGE, {
              charge: charge,
              id: id,
              sheetId: sheetId,
            })
          }
        >
          <RightSide>
            {charge[charge.length - 1]?.weight.toFixed(1)}kg
          </RightSide>
        </WeightButton>
      </Footer>
    </Container>
  );
};
