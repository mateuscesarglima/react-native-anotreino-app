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
import { hitData_10, hitData_15, hitData_25 } from "../../utils/HitData";
import { ScrollView, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const colors: any = {
  Fácil: "#106fbc",
  Moderado: "#2f9e44",
  Moderado_Alto: "#fcc419",
  Máximo: "#e03131",
  Forte: "#df6e11",
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
  const [hitTime, setHitTime] = useState<LevelData[]>([]);

  const getHitTime = (time: string) => {
    switch (time) {
      case "10'":
        return hitData_10;
      case "15'":
        return hitData_15;
      case "25'":
        return hitData_25;
    }
  };

  const getLevelData = (level: string) => {
    switch (level) {
      case "0":
        setLevelData(getHitTime(time)?.level_0 as LevelData[]);
        break;
      case "1":
        setLevelData(getHitTime(time)?.level_1 as LevelData[]);
        break;
      case "2":
        setLevelData(getHitTime(time)?.level_2 as LevelData[]);
        break;
      case "3":
        setLevelData(getHitTime(time)?.level_3 as LevelData[]);
        break;
      case "4":
        setLevelData(getHitTime(time)?.level_4 as LevelData[]);
        break;
      case "5":
        setLevelData(getHitTime(time)?.level_5 as LevelData[]);
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
