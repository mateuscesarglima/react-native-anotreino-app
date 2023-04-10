import React from "react";
import { Modal } from "react-native";
import { Container, ModalView } from "./styles";
import { IExercise, IExerciseCategory } from "interfaces";
import { AddNewExercise } from "../../molecule/AddNewExercise";

export interface AddNewExerciseModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  HandleAddNewExercise: (newTreino: IExercise) => void;
  setNewExercise: (value: string) => void;
  newExercise: string;
  exerciseCategory: IExerciseCategory[];
}

export const AddNewExerciseModal = ({
  setShowModal,
  showModal,
  HandleAddNewExercise,
  setNewExercise,
  newExercise,
  exerciseCategory,
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
            HandleAddNewExercise={HandleAddNewExercise}
            setNewExercise={setNewExercise}
            newExercise={newExercise}
          />
        </ModalView>
      </Modal>
    </Container>
  );
};
