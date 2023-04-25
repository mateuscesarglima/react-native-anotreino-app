import {
  AddWorkoutButton,
  AddWorkoutContainer,
  AddWorkoutHeader,
  Container,
  Header,
  Icon,
  Title,
  WorkoutList,
  WorkoutListContainer,
} from "./styles";

import { WorkoutItem } from "@Components/ui/molecule/WorkoutItem";
import { AddTreinoModal } from "@Components/ui/organism/AddTreinoModal";
import { ModalDialog } from "@Components/ui/organism/ModalDialog";
import { routeCodes } from "@Constants/routes/index";
import { useFicha } from "@Context/Ficha";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { IFicha } from "interfaces";
import React, { useEffect, useState } from "react";
import { Provider } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";

export const Home = () => {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  const { fichas, handleAddNewFicha, handleRemoveFicha } = useFicha();
  const [fichaData, setFichaData] = useState<IFicha[]>(fichas);
  const [showModal, setShowModal] = useState(false);
  const [newTreino, setNewTreino] = useState<string>("");
  const [showModalDialog, setShowModalDialog] = useState<boolean>(false);
  const [idFichaSelecionada, setIdFichaSelecionada] = useState<string>("");

  const handleOnSelectWorkout = (ficha: IFicha) => {
    {
      navigate(routeCodes.EXERCISES, {
        fichaData: ficha,
      });
    }
  };

  const handleShowModalDialog = (fichaId?: string) => {
    setShowModalDialog(!showModalDialog);
    setIdFichaSelecionada(fichaId || "");
  };
  console.log(idFichaSelecionada);
  useEffect(() => {
    setFichaData(fichas);
  }, [fichas]);

  return (
    <Provider>
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
          handleAddNewFicha={handleAddNewFicha}
          setNewTreino={setNewTreino}
          newTreino={newTreino}
        />
        <Header>
          {fichas.length < 0 ? (
            <Title>Meus treinos</Title>
          ) : (
            <AddWorkoutHeader>
              <Title>Meus treinos</Title>
              <AddWorkoutButton onPress={() => handleShowModalDialog()}>
                <Icon name="plus-circle" size={RFValue(40)} hasData={true} />
              </AddWorkoutButton>
            </AddWorkoutHeader>
          )}
        </Header>
        {fichas.length > 0 ? (
          <WorkoutListContainer>
            <WorkoutList
              data={fichaData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <WorkoutItem
                  ficha={item}
                  handleOnSelectWorkout={handleOnSelectWorkout}
                  handleRemoveFicha={handleRemoveFicha}
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
    </Provider>
  );
};
