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
import { data } from "../../utils/mockedData";
import React, { useEffect, useState } from "react";
import { ITreino } from "interfaces";
import { AddTreinoModal } from "@Components/ui/organism/AddTreinoModal";
import { pegarFichas } from "@Context/service/firestore";
import { View, Text, RefreshControl, ScrollView, TouchableOpacity } from 'react-native';

export const Home = () => {
  const [initData, setInitData] = useState<ITreino[]>([]); // inicia com array vazio
  const [showModal, setShowModal] = useState(false);
  const [newTreino, setNewTreino] = useState<string>("");
  const [refreshing, setRefreshing] = useState(false);

  async function carregarDadosFichas() {
    setRefreshing(true)
    const fichasFirestore = await pegarFichas()
    setInitData(fichasFirestore)
    setRefreshing(false)
  }

  useEffect(() => {
    carregarDadosFichas();
  }, []);


  const handleAddNewTreino = (newTreino: ITreino) => {
    const { id, title } = newTreino;
    setInitData((prev) => [...prev, { id: id, title: title }]);
  };

  return (
    <Container>
      <AddTreinoModal
        setShowModal={setShowModal}
        showModal={showModal}
        handleAddNewTreino={handleAddNewTreino}
        setNewTreino={setNewTreino}
        newTreino={newTreino}
      />
      <Header>
        {initData.length < 0 ? (
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
      {initData.length > 0 ? (
        <WorkoutListContainer>
          <ScrollView
            style={{ width: '100%' }}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={carregarDadosFichas}
              />
            }
          >
            {
              initData?.map((ficha) => {
                return <WorkoutItem key={ficha.id} itemName={ficha.title} />
              })}
          </ScrollView>
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
