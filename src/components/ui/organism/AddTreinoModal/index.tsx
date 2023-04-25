import { IFicha } from "interfaces";
import React from "react";
import { Modal } from "react-native";
import { AddNewTreino } from "../../molecule/AddNewTreino";
import { Container, ModalView } from "./styles";

interface AddTreinoModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  handleAddNewFicha: (newTreino: IFicha) => void;
  setNewTreino: (value: string) => void;
  newTreino: string;
}

export const AddTreinoModal = ({
  setShowModal,
  showModal,
  handleAddNewFicha,
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
              handleAddNewFicha={handleAddNewFicha}
              setNewTreino={setNewTreino}
              newTreino={newTreino}
            />
          </ModalView>
        </Container>
      </Modal>
    </Container>
  );
};
