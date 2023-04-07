import React, { useState } from "react";
import {
  Container,
  Header,
  Main,
  Text,
  BackButton,
  HeaderText,
  AddExerciseContainer,
  ExerciseListContainer,
  ButtonContainer,
} from "./styles";
import { CaretLeft } from "phosphor-react-native";
import { exercisesData } from "../../utils/mockedData";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { ButtonAddWorkout } from "@Components/ui/atom/AddWorkoutButton";
import { AddNewExerciseModal } from "@Components/ui/organism/AddNewExerciseModal";
import { IExercise, ITreino } from "interfaces";
import uuid from "react-native-uuid";

interface ExercisesProps {
  route: any;
}

export const Exercises = ({ route }: ExercisesProps) => {
  const [exercises, setExercises] = useState<IExercise[]>(exercisesData);
  const [newExercise, setNewExercise] = useState<string>("");
  const { goBack }: NavigationProp<ParamListBase> = useNavigation();
  const { workoutName } = route.params;
  const [showModal, setShowModal] = useState(false);

  const HandleAddNewExercise = (newExercise: IExercise) => {
    const { id, TreinoId, description, name } = newExercise;
    setExercises((prev) => [
      ...prev,
      {
        id: uuid.v4().toString(),
        name: name,
        description: description,
        TreinoId: TreinoId,
      },
    ]);
  };

  const handleOnPress = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <AddNewExerciseModal
        HandleAddNewExercise={HandleAddNewExercise}
        newExercise={newExercise}
        setNewExercise={setNewExercise}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <Header>
        <BackButton onPress={goBack}>
          <CaretLeft size={40} color="#FFF" />
        </BackButton>
        <HeaderText>{workoutName}</HeaderText>
      </Header>
      <Main>
        {true ? (
          <AddExerciseContainer>
            <Text>
              Lista vazia {`\n`} Adicione os exercicios clicando no ícone abaixo
            </Text>
            <ButtonContainer>
              <ButtonAddWorkout handleOnPress={handleOnPress} />
            </ButtonContainer>
          </AddExerciseContainer>
        ) : (
          <ExerciseListContainer></ExerciseListContainer>
        )}
      </Main>
    </Container>
  );
};
