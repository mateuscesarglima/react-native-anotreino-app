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
} from "@react-navigation/native";

export const Workout = () => {
  const { goBack }: NavigationProp<ParamListBase> = useNavigation();
  return (
    <Container>
      <Header>
        <BackButton onPress={goBack}>
          <Icon name="chevron-left" size={30} />
        </BackButton>
        <Content>
          <Title>TREINO B</Title>
          <DoneExercises>5 de 8</DoneExercises>
        </Content>
        <Icon name="edit" size={30} />
      </Header>
      <Main>
        <WorkoutList
          data={[1, 2, 3]}
          keyExtractor={(key) => key}
          renderItem={({ item }) => (
            <WorkoutListWrapper>
              <ExerciseCard />
            </WorkoutListWrapper>
          )}
        />
      </Main>
      <Footer></Footer>
    </Container>
  );
};
