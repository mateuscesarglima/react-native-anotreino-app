import {
  AddWorkoutButton,
  AddWorkoutContainer,
  AddWorkoutHeader,
  Container,
  Header,
  Icon,
  LoadContainer,
  Title,
  WorkoutList,
  WorkoutListContainer,
} from "./styles";

import { WorkoutItem } from "@Components/ui/molecule/WorkoutItem";
import { AddTreinoModal } from "@Components/ui/organism/AddTreinoModal";
import { ModalDialog } from "@Components/ui/organism/ModalDialog";
import { routeCodes } from "@Constants/routes/index";
import { useAuth } from "@Context/auth";
import { useSheet } from "@Context/sheets";
import { ISheet } from "@Interfaces/index";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { Provider } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";

export const Home = () => {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const { isLoading } = useAuth();
  const { sheets, handleAddNewExercise, handleAddNewSheet, handleRemoveFicha } =
    useSheet();
  const [newTreino, setNewTreino] = useState<string>("");
  const [showModalDialog, setShowModalDialog] = useState<boolean>(false);
  const [idFichaSelecionada, setIdFichaSelecionada] = useState<string>("");

  const handleOnSelectWorkout = (sheet: ISheet) => {
    navigate(routeCodes.EXERCISES, {
      sheetName: sheet.name,
      exercises: sheet.exercises,
    });
  };

  const handleShowModalDialog = (fichaId?: string) => {
    setShowModalDialog(!showModalDialog);
    setIdFichaSelecionada(fichaId || "");
  };

  return (
    <Provider>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={"red"} size={"large"} />
        </LoadContainer>
      ) : (
        <>
          <ModalDialog
            visible={showModalDialog}
            handleShowModalDialog={handleShowModalDialog}
            handleRemoveFicha={handleRemoveFicha}
            idFichaSelecionada={idFichaSelecionada}
          />
          <Container>
            <AddTreinoModal
              setShowModal={setShowModal}
              showModal={showModal}
              handleAddNewSheet={handleAddNewSheet}
              setNewTreino={setNewTreino}
              newTreino={newTreino}
            />
            <Header>
              {sheets.length < 0 ? (
                <Title>Meus treinos</Title>
              ) : (
                <AddWorkoutHeader>
                  <Title>Meus treinos</Title>
                  <AddWorkoutButton onPress={() => setShowModal(!showModal)}>
                    <Icon
                      name="plus-circle"
                      size={RFValue(40)}
                      hasData={true}
                    />
                  </AddWorkoutButton>
                </AddWorkoutHeader>
              )}
            </Header>
            {sheets.length > 0 ? (
              <WorkoutListContainer>
                <WorkoutList
                  data={sheets}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <WorkoutItem
                      sheet={item}
                      handleOnSelectWorkout={handleOnSelectWorkout}
                      handleShowModalDialog={handleShowModalDialog}
                    />
                  )}
                />
              </WorkoutListContainer>
            ) : (
              <AddWorkoutContainer>
                <AddWorkoutButton onPress={() => setShowModal(!showModal)}>
                  <Icon name="plus-circle" size={RFValue(70)} />
                </AddWorkoutButton>
              </AddWorkoutContainer>
            )}
          </Container>
        </>
      )}
    </Provider>
  );
};
