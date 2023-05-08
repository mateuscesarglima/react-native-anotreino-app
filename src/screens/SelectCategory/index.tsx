import React from "react";

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

interface Params {
  sheetName: string;
}

export const SelectCategory = () => {
  const route = useRoute();
  const { goBack, navigate }: NavigationProp<ParamListBase> = useNavigation();
  const { sheetName } = route.params as Params;

  const handleOnSelectExercise = (exercise: string) => {
    navigate(routeCodes.SELECTED_EXERCISE, {
      exercise: exercise,
      sheetName,
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
