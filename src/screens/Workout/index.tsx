import React, { useRef, useState } from "react";

import { IExercise, ISheet } from "@Interfaces/index";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Dimensions, View, ViewToken } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ExerciseCard } from "./components/ExerciseCard";
import {
  AvoidView,
  BackButton,
  Content,
  DoneExercises,
  EndWorkoutButton,
  EndWorkoutText,
  ExercisesIndexes,
  Footer,
  Header,
  Icon,
  Main,
  Title,
  WorkoutList,
  WorkoutListWrapper,
} from "./styles";
import { Alert } from "react-native";
import { routeCodes } from "@Constants/routes";

interface Params {
  sheet: ISheet;
}

interface ChangeExerciseProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

const { width } = Dimensions.get("window");

export const Workout = () => {
  const { goBack, navigate }: NavigationProp<ParamListBase> = useNavigation();
  const route = useRoute();
  const { sheet } = route.params as Params;
  const [doneExercises, setDoneExercises] = useState<IExercise[]>([]);

  const handleOnDoneExercise = (exercise: IExercise) => {
    const exerciseAlreadyExists = doneExercises.findIndex(
      (obj) => obj.id === exercise.id
    );
    if (exerciseAlreadyExists !== -1) {
      const removeExercise = doneExercises.filter(
        (obj) => obj.id !== exercise.id
      );
      setDoneExercises(removeExercise);
    } else {
      setDoneExercises((prev) => [...prev, exercise]);
    }
  };

  const isDoneExercise = (exerciseId: string) => {
    const isDone = doneExercises.findIndex(
      (exercise) => exercise.id === exerciseId
    );
    if (isDone === -1) return false;
    return true;
  };

  const [exerciseIndex, setExerciseIndex] = useState(0);

  const indexChanged = useRef((info: ChangeExerciseProps) => {
    const index = info?.viewableItems[0]?.index!;
    setExerciseIndex(index);
  });

  const onFinishExercise = () => {
    if (doneExercises.length < sheet.exercises.length) {
      Alert.alert(
        "Deseja realmente finalizar este treino?",
        "Existe exercícios que não foram finalizados",
        [
          {
            text: "Cancelar",
            onPress: () => {},
            style: "cancel",
          },
          {
            text: "Finalizar",
            onPress: () => {
              navigate(routeCodes.HOME);
            },
          },
        ]
      );
    }
  };

  return (
    <AvoidView>
      <Header>
        <BackButton onPress={goBack}>
          <Icon name="chevron-left" size={30} />
        </BackButton>
        <Content>
          <Title>{sheet.name}</Title>
          <DoneExercises>
            {doneExercises.length} de {sheet.exercises.length}
          </DoneExercises>
        </Content>
        <Icon name="edit" size={30} />
      </Header>
      <Main>
        <WorkoutList
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          snapToOffsets={[...Array(sheet.exercises.length)].map(
            (_, i) => i * (width - 50)
          )}
          data={sheet.exercises}
          keyExtractor={(key) => key.id}
          renderItem={({ item }) => (
            <WorkoutListWrapper>
              <ExerciseCard
                exercise={item}
                videoId={item.videoId}
                sheetId={sheet.id}
                handleOnDoneExercise={handleOnDoneExercise}
                doneExercises={doneExercises}
                isDoneExercise={isDoneExercise}
              />
            </WorkoutListWrapper>
          )}
          viewabilityConfig={{
            viewAreaCoveragePercentThreshold: 50,
          }}
          onViewableItemsChanged={indexChanged.current}
        />
      </Main>
      <ExercisesIndexes>
        <FlatList
          style={{
            marginTop: 50,
          }}
          contentContainerStyle={{
            gap: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          data={sheet.exercises}
          renderItem={({ item, index }) => {
            return (
              <View
                key={item.id}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor:
                    index === exerciseIndex ? "#b5b3b3" : "#0e0e0e33",
                  marginRight: 5,
                }}
              />
            );
          }}
        />
      </ExercisesIndexes>
      <Footer>
        <EndWorkoutButton onPress={onFinishExercise}>
          <EndWorkoutText>Finalizar treino</EndWorkoutText>
        </EndWorkoutButton>
      </Footer>
    </AvoidView>
  );
};
