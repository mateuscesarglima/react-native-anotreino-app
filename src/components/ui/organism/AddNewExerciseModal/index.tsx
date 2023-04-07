import React from "react";
import { Modal } from "react-native";
import { Container, ModalView } from "./styles";
import { IExercise } from "interfaces";
import { AddNewExercise } from "../AddNewExercise";

export interface AddNewExerciseModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  HandleAddNewExercise: (newTreino: IExercise) => void;
  setNewExercise: (value: string) => void;
  newExercise: string;
}

export const AddNewExerciseModal = ({
  setShowModal,
  showModal,
  HandleAddNewExercise,
  setNewExercise,
  newExercise,
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
        <Container>
          <ModalView>
            <AddNewExercise
              setShowModal={setShowModal}
              showModal={showModal}
              HandleAddNewExercise={HandleAddNewExercise}
              setNewExercise={setNewExercise}
              newExercise={newExercise}
            />
          </ModalView>
        </Container>
      </Modal>
    </Container>
  );
};
