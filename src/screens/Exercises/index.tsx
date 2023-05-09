import { ButtonAddWorkout } from "@Components/ui/atom/AddWorkoutButton";
import { ExerciseFichaItem } from "@Components/ui/atom/ExerciseFichaItem";
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { IExercise, ISheet } from "interfaces";
import { CaretLeft } from "phosphor-react-native";
import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl } from "react-native";

import { routeCodes } from "@Constants/routes";
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
import { useSheet } from "@Context/sheets";

interface Params {
  sheet: ISheet;
  exercises: IExercise[];
}

export const Exercises = () => {
  const route = useRoute();
  const { exercises, sheet } = route.params as Params;
  const { goBack, navigate, isFocused }: NavigationProp<ParamListBase> =
    useNavigation();
  const { sheets } = useSheet();
  const [currentSheet, setCurrentSheet] = useState<ISheet>(sheet);
  const [focus, setIsFocus] = useState(isFocused());
  const [updating, setUpdating] = useState(false);

  const handleOnPress = () => {
    navigate(routeCodes.SELECT_EXERCISE, {
      sheet,
    });
  };

  const onUpdate = () => {
    setUpdating(true);
    setTimeout(() => {
      const response = sheets.find((obj) => obj.name === sheet.name);
      setCurrentSheet(response as ISheet);
      setUpdating(false);
    }, 1000);
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack}>
          <CaretLeft size={40} color="#FFF" />
        </BackButton>
        <HeaderText>{currentSheet.name}</HeaderText>
        {currentSheet.exercises.length === 0 ? null : (
          <AddExerciseButton onPress={handleOnPress}>
            <Icon name="plus-circle" size={50} color={"#FFF"} />
          </AddExerciseButton>
        )}
      </Header>
      <Main>
        {currentSheet.exercises.length === 0 ? (
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
            refreshControl={
              <RefreshControl refreshing={updating} onRefresh={onUpdate} />
            }
            data={currentSheet.exercises}
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
