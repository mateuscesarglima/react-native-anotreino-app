import { ExerciseSelect } from "@Components/ui/molecule/ExercisesSelect";
import React from "react";
import { Modal } from "react-native";
import { Container, ModalView } from "./styles";
import { IExercise } from "interfaces";

export interface IExerciseSelectModal {
  showModal: boolean;
  handleShowExerciseSelectModal: (exerciseName: string) => void;
  exercises: any;
  exerciseName: string;
  handleAddNewExercise: (newExercise: IExercise, fichaId: string) => void;
  fichaId: string;
}

export const ExerciseSelectModal = ({
  handleShowExerciseSelectModal,
  showModal,
  exercises,
  exerciseName,
  handleAddNewExercise,
  fichaId,
}: IExerciseSelectModal) => {
  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => handleShowExerciseSelectModal("")}
      >
        <ModalView>
          <ExerciseSelect
            handleShowExerciseSelectModal={handleShowExerciseSelectModal}
            selectedExercise="testando"
            exercises={exercises}
            exerciseName={exerciseName}
            handleAddNewExercise={handleAddNewExercise}
            fichaId={fichaId}
          />
        </ModalView>
      </Modal>
    </Container>
  );
};
