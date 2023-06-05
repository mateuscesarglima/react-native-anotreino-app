import React, { useRef, useState } from "react";
import {
  Container,
  EnterButton,
  EnterButtonText,
  Footer,
  SlideIndexes,
} from "./styles";
import * as C from "./Slides";
import { FlatList, View, ViewToken } from "react-native";
import { Dimensions } from "react-native";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { routeCodes } from "@Constants/routes";

const width = Dimensions.get("window").width;
interface SlidesProps {
  id: number;
  component: JSX.Element;
}

interface ChangeIndexProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export const Welcome = () => {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  const [listIndex, setListIndex] = useState(0);

  const slides: SlidesProps[] = [
    { id: 1, component: <C.FirstSlide /> },
    { id: 2, component: <C.SecondSlide /> },
    { id: 3, component: <C.ThirdSlide /> },
    { id: 4, component: <C.FourthSlide /> },
    { id: 5, component: <C.FifthSlide /> },
  ];

  const indexChanged = useRef((info: ChangeIndexProps) => {
    const index = info?.viewableItems[0]?.index!;
    setListIndex(index);
  });
  return (
    <Container>
      <FlatList
        data={slides}
        contentContainerStyle={{ width: width * 5 + 40 }}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: 400,
                paddingRight: 40,
                paddingLeft: 40,
                alignItems: "center",
              }}
            >
              {item.component}
            </View>
          );
        }}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={indexChanged.current}
      />
      <Footer>
        <SlideIndexes>
          <FlatList
            style={{
              marginTop: 50,
            }}
            contentContainerStyle={{
              gap: 5,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            data={slides}
            renderItem={({ item, index }) => {
              return (
                <View
                  key={item.id}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor:
                      index === listIndex ? "#b5b3b3" : "#0e0e0e33",
                    marginRight: 5,
                  }}
                />
              );
            }}
          />
        </SlideIndexes>

        {listIndex !== 4 && (
          <EnterButton onPress={() => navigate(routeCodes.LOGIN)}>
            <EnterButtonText>Entrar</EnterButtonText>
          </EnterButton>
        )}
      </Footer>
    </Container>
  );
};
