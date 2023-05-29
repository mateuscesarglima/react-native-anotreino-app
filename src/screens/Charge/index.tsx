import React, { useEffect, useRef, useState } from "react";

import { AddNewChargeModal } from "@Components/ui/molecule/AddNewChargeModal";
import { BackButton } from "@Screens/Exercises/styles";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Dimensions, Platform } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Modalize } from "react-native-modalize";
import { useTheme } from "styled-components";
import {
  AddNewChargeButton,
  AddNewChargeButtonText,
  AvoidView,
  ChartContainer,
  Container,
  Header,
  Icon,
  Title,
} from "./styles";
import { ICharge } from "@Interfaces/index";
import { format } from "date-fns";
import { useSheet } from "@Context/sheets";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
const screenWidth = Dimensions.get("window").width;

interface Params {
  charge: ICharge[];
  id: string;
  sheetId: string;
}

export const Charge = () => {
  const theme = useTheme();
  const route = useRoute();
  const { charge, id, sheetId } = route.params as Params;
  const { goBack }: NavigationProp<ParamListBase> = useNavigation();
  const [updating, setUpdating] = useState(false);
  const { loadData, sheets, getCharge } = useSheet();
  const [chargeValues, setChargeValues] = useState<ICharge[]>(charge);
  const [updateCounter, setUpdateCounter] = useState(0);

  const data = {
    labels: chargeValues.map((item) => item.date),
    datasets: [
      {
        data: chargeValues.map((item) => item.weight),
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Histórico de carga"], // optional
  };
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  const onUpdate = () => {
    setUpdating(true);
    setTimeout(() => {
      loadData();
      loadChargeData();
      setUpdating(false);
    }, 1000);
  };

  const loadChargeData = async () => {
    const chargeTmp = await getCharge(id, sheetId);
    setChargeValues(chargeTmp);
  };

  const handleUpdateCounter = () => {
    setUpdateCounter(updateCounter + 1);
  };

  useEffect(() => {
    loadChargeData();
    loadData();
  }, [updateCounter]);

  return (
    <AvoidView behavior={Platform.OS === "ios" ? "height" : "padding"}>
      <Modalize
        ref={modalizeRef}
        adjustToContentHeight
        scrollViewProps={{ keyboardShouldPersistTaps: "handled" }}
      >
        <AddNewChargeModal
          charge={chargeValues}
          onClose={onClose}
          exerciseId={id}
          sheetId={sheetId}
          handleUpdateCounter={handleUpdateCounter}
        />
      </Modalize>

      <Container>
        <Header>
          <BackButton onPress={goBack}>
            <Icon name="chevron-left" size={35} color={"white"} />
          </BackButton>
          <Title>Carga</Title>
        </Header>
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            flex: 1,
          }}
          refreshControl={
            <RefreshControl refreshing={updating} onRefresh={onUpdate} />
          }
        >
          <ChartContainer>
            <LineChart
              data={data}
              width={screenWidth}
              height={256}
              verticalLabelRotation={1}
              chartConfig={{
                backgroundGradientFrom: "#f4f2f2",
                backgroundGradientTo: "#f4f2f2",
                color: (opacity = 1) => `#919090`,
                labelColor: (opacity = 1) => theme.colors.primary,
                propsForLabels: {
                  fontWeight: "bold",
                },
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                },
              }}
            />
          </ChartContainer>
          <AddNewChargeButton onPress={onOpen}>
            <AddNewChargeButtonText>Inserir nova carga</AddNewChargeButtonText>
          </AddNewChargeButton>
        </ScrollView>
      </Container>
    </AvoidView>
  );
};
