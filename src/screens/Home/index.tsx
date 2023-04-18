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

import { RFValue } from "react-native-responsive-fontsize";
import { WorkoutItem } from "@Components/ui/molecule/WorkoutItem";
import React, { useEffect, useState } from "react";
import { AddTreinoModal } from "@Components/ui/organism/AddTreinoModal";
import { routeCodes } from "@Constants/routes/index";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { useFicha } from "@Context/Ficha";
import { IFicha } from "interfaces";

export const Home = () => {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  const { fichas, handleAddNewFicha } = useFicha();
  const [fichaData, setFichaData] = useState<IFicha[]>(fichas);
  const [showModal, setShowModal] = useState(false);
  const [newTreino, setNewTreino] = useState<string>("");

  const handleOnSelectWorkout = (ficha: IFicha) => {
    {
      navigate(routeCodes.EXERCISES, {
        fichaData: ficha,
      });
    }
  };

  useEffect(() => {
    setFichaData(fichas);
  }, [fichas]);

  return (
    <Container>
      <AddTreinoModal
        setShowModal={setShowModal}
        showModal={showModal}
        handleAddNewFicha={handleAddNewFicha}
        setNewTreino={setNewTreino}
        newTreino={newTreino}
      />
      <Header>
        {fichaData.length < 0 ? (
          <Title>Meus treinos</Title>
        ) : (
          <AddWorkoutHeader>
            <Title>Meus treinos</Title>
            <AddWorkoutButton onPress={() => setShowModal(!showModal)}>
              <Icon name="plus-circle" size={RFValue(40)} hasData={true} />
            </AddWorkoutButton>
          </AddWorkoutHeader>
        )}
      </Header>
      {fichaData.length > 0 ? (
        <WorkoutListContainer>
          <WorkoutList
            data={fichaData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <WorkoutItem
                ficha={item}
                handleOnSelectWorkout={handleOnSelectWorkout}
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
  );
};
