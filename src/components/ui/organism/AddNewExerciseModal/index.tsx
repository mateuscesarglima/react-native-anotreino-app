import React from "react";
import { Modal } from "react-native";
import { Container, ModalView } from "./styles";
import { IExercise, IExerciseCategory } from "interfaces";
import { AddNewExercise } from "../../molecule/AddNewExercise";

export interface AddNewExerciseModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  setNewExercise: (value: string) => void;
  newExercise: string;
  exerciseCategory: IExerciseCategory[];
  handleShowExerciseSelectModal: (exerciseName: string) => void;
}

export const AddNewExerciseModal = ({
  setShowModal,
  showModal,
  setNewExercise,
  newExercise,
  exerciseCategory,
  handleShowExerciseSelectModal,
}: AddNewExerciseModalProps) => {
  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}
      >
        <ModalView>
          <AddNewExercise
            exerciseCategory={exerciseCategory}
            setShowModal={setShowModal}
            showModal={showModal}
            setNewExercise={setNewExercise}
            newExercise={newExercise}
            handleShowExerciseSelectModal={handleShowExerciseSelectModal}
          />
        </ModalView>
      </Modal>
    </Container>
  );
};
