import React, { useEffect, useState } from "react";

import { Header } from "@Components/ui/organism/Header";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import {
  Container,
  Main,
  ResumeHitText,
  TableBody,
  TableContainer,
  TableHeader,
  TableHeaderText,
  TableRowItem,
  TableRowItemEsforcoText,
  TableRowItemWrapper,
} from "./styles";
import { hitData } from "../../utils/HitData";
import { ScrollView, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const colors: any = {
  Fácil: "#106fbc",
  Moderado: "#2f9e44",
  Moderado_Alto: "#fcc419",
  Máximo: "#e03131",
  Forte: "#fd7e14",
};

interface Params {
  level: string;
  time: string;
}

interface LevelData {
  id: number;
  time: string;
  velocidade: string;
  esforço: string;
}

export const HitResume = () => {
  const route = useRoute();
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  const { level, time } = route.params as Params;
  const [levelData, setLevelData] = useState<LevelData[]>([]);

  const getLevelData = (level: string) => {
    switch (level) {
      case "0":
        setLevelData(hitData.level_0);
        break;
      case "1":
        setLevelData(hitData.level_1);
        break;
      case "2":
        setLevelData(hitData.level_2);
        break;
      case "3":
        setLevelData(hitData.level_3);
        break;
      case "4":
        setLevelData(hitData.level_4);
        break;
      case "5":
        setLevelData(hitData.level_5);
        break;
    }
  };

  useEffect(() => {
    setLevelData([]);
    getLevelData(level);
  }, [level]);

  return (
    <Container>
      <Header title={`HIT ${time} - NÍVEl ${level}`} />
      <Main>
        <ResumeHitText>Resumo do seu HIT</ResumeHitText>
        <TableContainer>
          <TableHeader>
            <TableHeaderText>Tempo</TableHeaderText>
            <TableHeaderText>Velocidade</TableHeaderText>
            <TableHeaderText>Esforço</TableHeaderText>
          </TableHeader>
          <TableBody>
            <FlatList
              data={levelData}
              keyExtractor={(item) => item.id.toString()}
              horizontal={false}
              contentContainerStyle={{
                justifyContent: "center",
              }}
              ItemSeparatorComponent={() => (
                <View style={{ height: 1, backgroundColor: "#DDD" }} />
              )}
              renderItem={({ item }) => {
                return (
                  <TableRowItemWrapper key={item.id}>
                    <TableRowItem>{item.time}</TableRowItem>
                    <TableRowItem>{item.velocidade}</TableRowItem>
                    <TableRowItemEsforcoText color={colors[item.esforço]}>
                      {item.esforço}
                    </TableRowItemEsforcoText>
                  </TableRowItemWrapper>
                );
              }}
            />
          </TableBody>
        </TableContainer>
      </Main>
    </Container>
  );
};
