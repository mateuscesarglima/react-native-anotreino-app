import { Header } from "@Components/ui/organism/Header";
import React from "react";

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import {
  CardItem,
  Container,
  Main,
  MinutesText,
  SelectTimerText,
  Time,
} from "./styles";
import { routeCodes } from "@Constants/routes";

interface Params {
  exerciseType: string;
}

export const TimerSelect = () => {
  const route = useRoute();
  const { exerciseType } = route.params as Params;
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  const handleOnNavigate = (time: string) => {
    navigate(routeCodes.SELECT_LEVEL, {
      time,
    });
  };

  const TimerData = [
    {
      id: 1,
      time: "10'",
    },
    {
      id: 2,
      time: "15'",
    },
    {
      id: 3,
      time: "25'",
    },
  ];

  return (
    <Container>
      <Header title={`Hit ${exerciseType}`} />
      <Main>
        <SelectTimerText>Escolha o tempo para o hit</SelectTimerText>
        <FlatList
          data={TimerData}
          contentContainerStyle={{
            gap: 10,
            width: "100%",
            justifyContent: "center",
            marginTop: 30,
          }}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <CardItem onPress={() => handleOnNavigate(item.time)}>
              <Time>{item.time}</Time>
              <MinutesText>Minutos</MinutesText>
            </CardItem>
          )}
        />
      </Main>
    </Container>
  );
};
