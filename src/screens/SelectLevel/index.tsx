import React from "react";
import { Header } from "@Components/ui/organism/Header";

import {
  Container,
  ItemInfoText,
  LevelInfoContainer,
  LevelItem,
  LevelNumber,
  LevelTextTitle,
  Main,
  SelectLevelContainer,
  SelectTimerText,
  Separator,
} from "./styles";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { ArrowRight } from "phosphor-react-native";
import { routeCodes } from "@Constants/routes";

const colors: any = {
  0: "#339af0",
  1: "#1971c2",
  2: "#2f9e44",
  3: "#fab005",
  4: "#ff922b",
  5: "#fa5252",
};

interface Params {
  time: string;
}

export const SelectLevel = () => {
  const route = useRoute();
  const { time } = route.params as Params;

  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  const levelData = [
    {
      id: "1",
      level: "0",
      text: "Muito Fácil",
    },
    {
      id: "2",
      level: "1",
      text: "Fácil",
    },
    {
      id: "3",
      level: "2",
      text: "Moderado",
    },
    {
      id: "4",
      level: "3",
      text: "Moderado Alto",
    },
    {
      id: "5",
      level: "4",
      text: "Forte",
    },
    {
      id: "6",
      level: "5",
      text: "Máximo",
    },
  ];

  const handleOnSelect = (level: string) => {
    navigate(routeCodes.HIT_RESUME, {
      level,
      time,
    });
  };
  return (
    <Container>
      <Header title={`HIT ${time}`} />
      <Main>
        <SelectTimerText>Escolha o nível do seu treino</SelectTimerText>
        <SelectLevelContainer>
          <FlatList
            data={levelData}
            contentContainerStyle={{
              width: "100%",
              gap: 10,
            }}
            ItemSeparatorComponent={Separator}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <LevelItem
                onPress={() => {
                  handleOnSelect(item.level);
                }}
              >
                <LevelInfoContainer color={colors[item.level]}>
                  <LevelTextTitle>Nível</LevelTextTitle>
                  <LevelNumber>{item.level}</LevelNumber>
                </LevelInfoContainer>
                <ItemInfoText>{item.text}</ItemInfoText>
                <ArrowRight size={20} />
              </LevelItem>
            )}
          />
        </SelectLevelContainer>
      </Main>
    </Container>
  );
};
