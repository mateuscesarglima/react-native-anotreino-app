import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { View } from "react-native";
import {
  AnotationWrapper,
  Anotations,
  Body,
  ButtonPlay,
  ButtonPlayWrapper,
  Container,
  Content,
  Divisor,
  ExerciseName,
  ExerciseNameWrapper,
  Footer,
  Header,
  LeftSideFooter,
  LeftWrapper,
  Repetition,
  RepetitionText,
  RepetitionValue,
  Rest,
  RestText,
  RightSideFooter,
  RightWrapper,
  Serie,
  SerieAndRepetitionWrapper,
  SerieText,
  SerieValue,
  Time,
  TimeWrapper,
  WeightValue,
} from "./styles";
import YoutubeIframe from "react-native-youtube-iframe";
import { ActivityIndicator } from "react-native-paper";
import { IExercise } from "@Interfaces/index";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { routeCodes } from "@Constants/routes";
const YOUTUBE_FRAME = 180;

interface ExerciseCardProps {
  exercise: IExercise;
  videoId?: string;
  sheetId: string;
}

export const ExerciseCard = ({
  exercise,
  videoId,
  sheetId,
}: ExerciseCardProps) => {
  const [videoReady, setVideoReady] = useState(false);
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  const handleOnClickWeight = () => {
    navigate(routeCodes.CHARGE, {
      charge: exercise.charge,
      id: exercise.id,
      sheetId: sheetId,
    });
  };
  return (
    <Container>
      <Content>
        <Header>
          {!videoReady ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 80,
              }}
            >
              <ActivityIndicator color="red" />
            </View>
          ) : null}
          <YoutubeIframe
            videoId={videoId}
            height={YOUTUBE_FRAME}
            onReady={() => setVideoReady(true)}
            webViewStyle={{
              overflow: "hidden",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          />
        </Header>
        <Body>
          <ExerciseNameWrapper>
            <ExerciseName>{exercise.name}</ExerciseName>
          </ExerciseNameWrapper>
          <SerieAndRepetitionWrapper>
            <Serie>
              <SerieText>Série</SerieText>
              <SerieValue>3x</SerieValue>
            </Serie>
            <Repetition>
              <RepetitionText>Repetição</RepetitionText>
              <RepetitionValue>10 a 15</RepetitionValue>
            </Repetition>
          </SerieAndRepetitionWrapper>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Rest>
              <RestText>Descanso</RestText>

              <TimeWrapper>
                <Time>00</Time>
                <Time>:</Time>
                <Time>30</Time>
                <View>
                  <ButtonPlayWrapper>
                    <ButtonPlay name="play" size={25} />
                  </ButtonPlayWrapper>
                </View>
              </TimeWrapper>
            </Rest>
          </View>
          <Footer>
            <RightSideFooter
              onPress={() => {
                handleOnClickWeight();
              }}
            >
              <RightWrapper>
                <WeightValue>
                  {exercise.charge[exercise.charge.length - 1].weight.toFixed(
                    1
                  )}{" "}
                  Kg
                </WeightValue>
              </RightWrapper>
            </RightSideFooter>
            <Divisor />
            <LeftSideFooter
              onPress={() =>
                navigate(routeCodes.NOTES, {
                  exerciseId: exercise.id,
                })
              }
            >
              <LeftWrapper>
                <AnotationWrapper>
                  <WeightValue>
                    <Feather name="edit" size={20} />
                  </WeightValue>
                  <Anotations>Anotações</Anotations>
                </AnotationWrapper>
              </LeftWrapper>
            </LeftSideFooter>
          </Footer>
        </Body>
      </Content>
    </Container>
  );
};
