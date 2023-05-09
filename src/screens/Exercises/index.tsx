import { ButtonAddWorkout } from "@Components/ui/atom/AddWorkoutButton";
import { ExerciseFichaItem } from "@Components/ui/atom/ExerciseFichaItem";
import { AddNewExerciseModal } from "@Components/ui/organism/AddNewExerciseModal";
import { ExerciseSelectModal } from "@Components/ui/organism/ExerciseSelectModal";
import { useSheet } from "@Context/sheets";
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { IExercise, ISheet } from "interfaces";
import { CaretLeft } from "phosphor-react-native";
import React, { useCallback, useState } from "react";

import {
  AddExerciseButton,
  AddExerciseContainer,
  BackButton,
  ButtonContainer,
  Container,
  ExerciseListContainer,
  Header,
  HeaderText,
  Icon,
  Main,
  Text,
} from "./styles";
import { exerciseCategory } from "../../utils/mockedData";
import { routeCodes } from "@Constants/routes";

interface Params {
  sheet: ISheet;
  exercises: IExercise[];
}

export const Exercises = () => {
  const route = useRoute();
  const { exercises, sheet } = route.params as Params;
  const { goBack, navigate }: NavigationProp<ParamListBase> = useNavigation();
  const { loadData } = useSheet();

  const handleOnPress = () => {
    navigate(routeCodes.SELECT_EXERCISE, {
      sheet,
    });
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack}>
          <CaretLeft size={40} color="#FFF" />
        </BackButton>
        <HeaderText>{sheet.name}</HeaderText>
        {exercises.length === 0 ? null : (
          <AddExerciseButton onPress={handleOnPress}>
            <Icon name="plus-circle" size={50} color={"#FFF"} />
          </AddExerciseButton>
        )}
      </Header>
      <Main>
        {exercises.length === 0 ? (
          <AddExerciseContainer>
            <Text>
              Lista vazia {`\n`} Adicione os exercicios clicando no ícone abaixo
            </Text>
            <ButtonContainer>
              <ButtonAddWorkout handleOnPress={handleOnPress} />
            </ButtonContainer>
          </AddExerciseContainer>
        ) : (
          <ExerciseListContainer
            horizontal={false}
            data={exercises}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <ExerciseFichaItem
                name={item.name}
                img={""}
                description={item.description}
              />
            )}
          />
        )}
      </Main>
    </Container>
  );
};
