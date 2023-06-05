import React from "react";
import {
  Container,
  Description,
  DescriptionContainer,
  DescriptionTitle,
  ExerciseTypeContainer,
  Main,
  HitText,
  CardItem,
  ExerciseType,
} from "./styles";
import { Header } from "@Components/ui/organism/Header";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { routeCodes } from "@Constants/routes";

export const Hit = () => {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  const handleOnNavigate = (exerciseType: "esteira" | "eliptico" | "bike") => {
    navigate(routeCodes.TIMER_SELECT, {
      exerciseType,
    });
  };

  return (
    <Container>
      <Header title="Treino Hit" />
      <Main>
        <DescriptionContainer>
          <DescriptionTitle>Escolha seu treino HIT</DescriptionTitle>
          <Description>
            Treinos curtos de alta intensidade para queimar calorias, melhorar o
            condicionamento físico, acelerar o metabolismo melhorar sua
            capacidadde cardiovascular
          </Description>
        </DescriptionContainer>
        <ExerciseTypeContainer>
          <CardItem onPress={() => handleOnNavigate("esteira")}>
            <HitText>Hit</HitText>
            <ExerciseType>Esteira</ExerciseType>
          </CardItem>
        </ExerciseTypeContainer>
        <ExerciseTypeContainer>
          <CardItem>
            <HitText>Hit</HitText>
            <ExerciseType>Bike</ExerciseType>
            <HitText>In Development...</HitText>
          </CardItem>
        </ExerciseTypeContainer>
        <ExerciseTypeContainer>
          <CardItem>
            <HitText>Hit</HitText>
            <ExerciseType>Elíptico</ExerciseType>
            <HitText>In Development...</HitText>
          </CardItem>
        </ExerciseTypeContainer>
      </Main>
    </Container>
  );
};
