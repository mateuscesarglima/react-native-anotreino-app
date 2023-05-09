import React, { useEffect } from "react";

import { BackButton } from "@Components/ui/molecule/AddNewExercise/styles";
import { routeCodes } from "@Constants/routes";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { exerciseCategory } from "../../utils/mockedData";
import {
  CategoryContainer,
  CategoryExerciseContainer,
  Container,
  Content,
  ExerciseItem,
  Header,
  Icon,
  Title,
} from "./styles";
import { ISheet } from "@Interfaces/index";
import { useSheet } from "@Context/sheets";

interface Params {
  sheet: ISheet;
}

export const SelectCategory = () => {
  const route = useRoute();
  const { goBack, navigate }: NavigationProp<ParamListBase> = useNavigation();
  const { sheet } = route.params as Params;
  const { loadData } = useSheet();

  const handleOnSelectExercise = (exercise: string) => {
    navigate(routeCodes.SELECTED_EXERCISE, {
      exercise: exercise,
      sheet,
    });
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack}>
          <Icon name="chevron-left" size={35} color={"white"} />
        </BackButton>
        <Title>Selecionar Categoria</Title>
      </Header>
      <CategoryExerciseContainer>
        <Content
          numColumns={2}
          data={exerciseCategory}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => (
            <CategoryContainer
              onPress={() => handleOnSelectExercise(item.label)}
            >
              <ExerciseItem>{item.label}</ExerciseItem>
            </CategoryContainer>
          )}
        />
      </CategoryExerciseContainer>
    </Container>
  );
};
