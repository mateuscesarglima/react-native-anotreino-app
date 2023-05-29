import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import {
  BackButton,
  Container,
  ExercisesList,
  Header,
  Icon,
  Main,
  Title,
} from "./styles";
import { ExerciseCard } from "@Components/ui/molecule/ExerciseCard";
import { exercisesSelectedData } from "utils/mockedData";
import { IExercise } from "interfaces";

interface IExerciseSelect {
  selectedExercise: string;
  handleShowExerciseSelectModal: (exerciseName: string) => void;
  exercises: typeof exercisesSelectedData;
  exerciseName: string;
  handleAddNewExercise: (newExercise: IExercise, fichaId: string) => void;
  fichaId: string;
}

export const ExerciseSelect = ({
  selectedExercise,
  handleShowExerciseSelectModal,
  exercises,
  exerciseName,
  handleAddNewExercise,
  fichaId,
}: IExerciseSelect) => {
  const handleGetExerciseTypeData = () => {
    switch (exerciseName) {
      case "Peitoral":
        return exercises.peito;
      case "Costas":
        return exercises.costas;
      case "Biceps":
        return exercises.biceps;
      case "Tríceps":
        return exercises.triceps;
      case "Ombros":
        return exercises.ombros;
      case "Pernas":
        return exercises.pernas;
    }
  };
  return (
    <Container>
      <Header>
        <BackButton onPress={() => handleShowExerciseSelectModal("")}>
          <Icon name="chevron-left" size={RFValue(40)} />
        </BackButton>
        <Title>{exerciseName}</Title>
      </Header>
      <Main>
        <ExercisesList
          data={handleGetExerciseTypeData()}
          keyExtractor={(exercise) => exercise.id}
          renderItem={({ item }) => (
            <ExerciseCard
              charge={item.charge}
              id={item.id}
              description={item.description}
              name={item.name}
              handleAddNewExercise={() =>
                handleAddNewExercise(
                  {
                    id: item.id,
                    description: item.description,
                    name: item.name,
                    charge: item.charge,
                  },
                  fichaId
                )
              }
            />
          )}
        />
      </Main>
    </Container>
  );
};
