import { routeCodes } from "@Constants/routes";
import { IActiveExercise, IExercise } from "@Interfaces/index";
import { Feather } from "@expo/vector-icons";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { differenceInSeconds } from "date-fns";
import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import YoutubeIframe from "react-native-youtube-iframe";
import {
  AnotationWrapper,
  Anotations,
  Body,
  ButtonDoneExercise,
  ButtonDoneText,
  ButtonIcon,
  ButtonPlayWrapper,
  Container,
  Content,
  Divisor,
  ExerciseName,
  ExerciseNameWrapper,
  Footer,
  Header,
  IsDoneWrapper,
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
import { useTheme } from "styled-components";
const YOUTUBE_FRAME = 180;

interface ExerciseCardProps {
  exercise: IExercise;
  videoId?: string;
  sheetId: string;
  doneExercises: IExercise[];
  handleOnDoneExercise: (exercise: IExercise) => void;
  isDoneExercise: (exerciseId: string) => boolean;
}

export const ExerciseCard = ({
  exercise,
  videoId,
  sheetId,
  handleOnDoneExercise,
  doneExercises,
  isDoneExercise,
}: ExerciseCardProps) => {
  const [videoReady, setVideoReady] = useState(false);
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  const [alarmSound, setAlarmSound] = useState<Audio.Sound>();
  const theme = useTheme();
  const [exerciseOnInterval, setExerciseOnInterval] = useState<IActiveExercise>(
    {} as IActiveExercise
  );
  const [seconds, setSeconds] = useState(30 % 60);
  const handleOnClickWeight = () => {
    navigate(routeCodes.CHARGE, {
      charge: exercise.charge,
      id: exercise.id,
      sheetId: sheetId,
    });
  };

  const markCurrentExerciseOnIntervalAsFinished = () => {
    setSeconds(30 % 60);
    setExerciseOnInterval({} as IActiveExercise);
    playSound();
  };

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (exerciseOnInterval.id) {
      interval = setInterval(() => {
        const difference = differenceInSeconds(
          new Date(),
          exerciseOnInterval.startDate
        );
        if (difference >= 30) {
          markCurrentExerciseOnIntervalAsFinished();
          Alert.alert("Descanso finalizado");
        } else {
          setSeconds(30 - difference);
        }
      });
    } else {
      return;
    }

    return () => clearInterval(interval);
  }, [seconds, exerciseOnInterval]);

  const handleOnInterval = () => {
    if (exerciseOnInterval.id) {
      Alert.alert("Descanso finalizado");
      markCurrentExerciseOnIntervalAsFinished();
    } else {
      setExerciseOnInterval({ id: exercise.id, startDate: new Date() });
    }
  };

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("@Assets/sounds/interval.wav")
    );
    setAlarmSound(sound);

    await sound.playAsync();
  }

  React.useEffect(() => {
    return alarmSound
      ? () => {
          alarmSound.unloadAsync();
        }
      : undefined;
  }, [alarmSound]);

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
            webViewProps={{
              startInLoadingState: true,
              onShouldStartLoadWithRequest: () => true,
            }}
          />
        </Header>

        <IsDoneWrapper isDone={isDoneExercise(exercise.id)}>
          <ButtonDoneExercise
            onPress={() => {
              handleOnDoneExercise(exercise);
            }}
          >
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 4,
                backgroundColor: "#FFF",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isDoneExercise(exercise.id) ? (
                <Feather
                  name="check"
                  size={25}
                  color={theme.colors.quarternary}
                />
              ) : null}
            </View>
            <ButtonDoneText>Tá feito?</ButtonDoneText>
          </ButtonDoneExercise>
        </IsDoneWrapper>

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
                <Time>{seconds.toString().padStart(2, "0")}</Time>
                <View>
                  <ButtonPlayWrapper onPress={handleOnInterval}>
                    {!exerciseOnInterval.id ? (
                      <ButtonIcon name="play" size={25} />
                    ) : (
                      <ButtonIcon name="square" size={25} />
                    )}
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
