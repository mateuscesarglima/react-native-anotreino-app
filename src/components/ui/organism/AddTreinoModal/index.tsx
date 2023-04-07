import React from "react";
import { Modal } from "react-native";
import { Container, ModalView } from "./styles";
import { AddNewTreino } from "../AddNewTreino";
import { ITreino } from "interfaces";

interface AddTreinoModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  handleAddNewTreino: (newTreino: ITreino) => void;
  setNewTreino: (value: string) => void;
  newTreino: string;
}

export const AddTreinoModal = ({
  setShowModal,
  showModal,
  setNewTreino,
  newTreino,
}: AddTreinoModalProps) => {
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
            <AddNewTreino
              setShowModal={setShowModal}
              showModal={showModal}
              setNewTreino={setNewTreino}
              newTreino={newTreino}
            />
          </ModalView>
        </Container>
      </Modal>
    </Container>
  );
};
