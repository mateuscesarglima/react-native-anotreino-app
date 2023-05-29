import React from "react";

import {
  BackButton,
  Container,
  Content,
  DoneExercises,
  Footer,
  Header,
  Icon,
  Main,
  Title,
  WorkoutList,
  WorkoutListWrapper,
} from "./styles";
import { ExerciseCard } from "./components/ExerciseCard";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { ISheet } from "@Interfaces/index";

interface Params {
  sheet: ISheet;
}

export const Workout = () => {
  const { goBack }: NavigationProp<ParamListBase> = useNavigation();
  const route = useRoute();
  const { sheet } = route.params as Params;

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack}>
          <Icon name="chevron-left" size={30} />
        </BackButton>
        <Content>
          <Title>{sheet.name}</Title>
          <DoneExercises>0 de {sheet.exercises.length}</DoneExercises>
        </Content>
        <Icon name="edit" size={30} />
      </Header>
      <Main>
        <WorkoutList
          data={sheet.exercises}
          keyExtractor={(key) => key.id}
          renderItem={({ item }) => (
            <WorkoutListWrapper>
              <ExerciseCard
                exercise={item}
                videoId={item.videoId}
                sheetId={sheet.id}
              />
            </WorkoutListWrapper>
          )}
        />
      </Main>
      <Footer></Footer>
    </Container>
  );
};
