import { BackButton } from "@Components/ui/molecule/AddNewExercise/styles";
import { ExercisesList } from "@Components/ui/molecule/ExercisesSelect/styles";
import { IExercise } from "@Interfaces/index";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { exercisesSelectedData } from "../../utils/mockedData";
import { Container, Content, Header, Icon, Title } from "./styles";
import { ExerciseListItem } from "./components/ExerciseListItem";

interface Params {
  exercise: string;
}

export const SelectedExercise = () => {
  const route = useRoute();
  const { exercise } = route.params as Params;
  const { goBack, navigate }: NavigationProp<ParamListBase> = useNavigation();
  const [exercises, setExercises] = useState<IExercise[]>([]);

  const getExercises = () => {
    switch (exercise) {
      case "Peitoral":
        setExercises(exercisesSelectedData.peito);
        break;
      case "Costas":
        setExercises(exercisesSelectedData.costas);
        break;
      case "Bíceps":
        setExercises(exercisesSelectedData.biceps);
        break;
      case "Ombros":
        setExercises(exercisesSelectedData.ombros);
        break;
      case "Abdômen":
        setExercises(exercisesSelectedData.abdomem);
        break;
      case "Tríceps":
        setExercises(exercisesSelectedData.triceps);
        break;
      case "Pernas":
        setExercises(exercisesSelectedData.pernas);
        break;
      case "Antebraços":
        return;
    }
  };

  useEffect(() => {
    getExercises();
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack}>
          <Icon name="chevron-left" size={35} color={"white"} />
        </BackButton>
        <Title>{exercise}</Title>
      </Header>
      <Content>
        <ExercisesList
          data={exercises}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ExerciseListItem exercise={item} />}
        />
      </Content>
    </Container>
  );
};
