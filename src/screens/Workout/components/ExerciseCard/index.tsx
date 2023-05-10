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
const YOUTUBE_FRAME = 180;
export const ExerciseCard = () => {
  const [videoReady, setVideoReady] = useState(false);

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
            videoId="sqOw2Y6uDWQ"
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
            <ExerciseName>Cadeira Extensora</ExerciseName>
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
            <RightSideFooter>
              <RightWrapper>
                <WeightValue>40.0KG</WeightValue>
              </RightWrapper>
            </RightSideFooter>
            <Divisor />
            <LeftSideFooter>
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
