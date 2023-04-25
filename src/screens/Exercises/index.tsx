import { ButtonAddWorkout } from "@Components/ui/atom/AddWorkoutButton";
import { ExerciseFichaItem } from "@Components/ui/atom/ExerciseFichaItem";
import { AddNewExerciseModal } from "@Components/ui/organism/AddNewExerciseModal";
import { ExerciseSelectModal } from "@Components/ui/organism/ExerciseSelectModal";
import { useFicha } from "@Context/Ficha";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { IExercise, IExerciseType } from "interfaces";
import { CaretLeft } from "phosphor-react-native";
import React, { useEffect, useState } from "react";
import { exerciseCategory, exerciseCategoryData } from "../../utils/mockedData";
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

interface ExercisesProps {
  route: any;
}

export const Exercises = ({ route }: ExercisesProps) => {
  // const [exercises, setExercises] = useState<IExercise[]>(exercisesData);
  const { fichas, handleAddNewExercise } = useFicha();
  const { title, id } = route.params?.fichaData;
  const { goBack }: NavigationProp<ParamListBase> = useNavigation();

  const [exercises, setExercises] =
    useState<IExerciseType>(exerciseCategoryData);

  const [myExercises, setMyExercises] = useState<IExercise[]>([]);
  const [newExercise, setNewExercise] = useState<string>("");

  const [showModal, setShowModal] = useState(false);
  const [showExerciseSelectModal, setShowExerciseSelectModal] = useState(false);
  const [exerciseName, setExerciseName] = useState<string>("");

  const handleOnPress = () => {
    setShowModal(!showModal);
  };

  const handleShowExerciseSelectModal = (exerciseName: string) => {
    handleOnPress();
    setExerciseName(exerciseName);
    setShowExerciseSelectModal(!showExerciseSelectModal);
  };

  useEffect(() => {
    fichas.find((ficha) =>
      ficha.id === id ? setMyExercises(ficha.exercicios) : null
    );
  }, [id]);

  useEffect(() => {
    fichas.find((ficha) =>
      ficha.id === id ? setMyExercises(ficha.exercicios) : null
    );
  }, [fichas]);

  return (
    <Container>
      <AddNewExerciseModal
        newExercise={newExercise}
        setNewExercise={setNewExercise}
        setShowModal={setShowModal}
        showModal={showModal}
        exerciseCategory={exerciseCategory}
        handleShowExerciseSelectModal={handleShowExerciseSelectModal}
      />
      <ExerciseSelectModal
        handleShowExerciseSelectModal={handleShowExerciseSelectModal}
        showModal={showExerciseSelectModal}
        exercises={exercises}
        exerciseName={exerciseName}
        handleAddNewExercise={handleAddNewExercise}
        fichaId={id}
      />
      <Header>
        <BackButton onPress={goBack}>
          <CaretLeft size={40} color="#FFF" />
        </BackButton>
        <HeaderText>{title}</HeaderText>
        {myExercises.length === 0 ? null : (
          <AddExerciseButton onPress={handleOnPress}>
            <Icon name="plus-circle" size={50} color={"#FFF"} />
          </AddExerciseButton>
        )}
      </Header>
      <Main>
        {myExercises.length === 0 ? (
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
            data={myExercises}
            keyExtractor={(item) => item.id}
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
