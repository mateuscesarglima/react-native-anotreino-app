interface AddTreinoModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable } from "react-native";
import { Container, ModalView } from "./styles";
import { AddNewTreino } from "../AddNewTreino";

export const AddTreinoModal = ({
  setShowModal,
  showModal,
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
            <AddNewTreino setShowModal={setShowModal} showModal={showModal} />
          </ModalView>
        </Container>
      </Modal>
    </Container>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
