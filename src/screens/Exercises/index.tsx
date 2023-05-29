import { ButtonAddWorkout } from "@Components/ui/atom/AddWorkoutButton";
import { ExerciseFichaItem } from "@Components/ui/atom/ExerciseFichaItem";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { IExercise, ISheet } from "interfaces";
import { CaretLeft } from "phosphor-react-native";
import React, { useRef, useState } from "react";
import { RefreshControl } from "react-native";

import { SaibaMaisModal } from "@Components/ui/molecule/SaibaMaisModal";
import { routeCodes } from "@Constants/routes";
import { useSheet } from "@Context/sheets";
import { Modalize } from "react-native-modalize";
import {
  AddExerciseButton,
  AddExerciseContainer,
  BackButton,
  ButtonContainer,
  ButtonText,
  Container,
  ExerciseListContainer,
  Header,
  HeaderText,
  Icon,
  StartExerciseButton,
  StartExerciseButtonContainer,
  Text,
} from "./styles";

interface Params {
  sheet: ISheet;
  exercises: IExercise[];
}

export const Exercises = () => {
  const route = useRoute();
  const { exercises, sheet } = route.params as Params;
  const { goBack, navigate, isFocused }: NavigationProp<ParamListBase> =
    useNavigation();
  const { sheets } = useSheet();
  const [currentSheet, setCurrentSheet] = useState<ISheet>(sheet);
  const [focus, setIsFocus] = useState(isFocused());
  const [updating, setUpdating] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleOnPress = () => {
    navigate(routeCodes.SELECT_EXERCISE, {
      sheet,
    });
  };

  const onUpdate = () => {
    setUpdating(true);
    setTimeout(() => {
      const response = sheets.find((obj) => obj.name === sheet.name);
      setCurrentSheet(response as ISheet);
      setUpdating(false);
    }, 1000);
  };

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = (description: string, name: string, videoId: string) => {
    setVideoId(videoId);
    setName(name);
    setDescription(description);
    modalizeRef.current?.open();
  };

  return (
    <Container>
      <Modalize ref={modalizeRef}>
        <SaibaMaisModal
          description={description}
          name={name}
          videoId={videoId}
        />
      </Modalize>
      <Header>
        <BackButton onPress={goBack}>
          <CaretLeft size={40} color="#FFF" />
        </BackButton>

        <HeaderText>{currentSheet.name}</HeaderText>
        {currentSheet.exercises.length === 0 ? null : (
          <AddExerciseButton onPress={handleOnPress}>
            <Icon name="plus-circle" size={50} color={"#FFF"} />
          </AddExerciseButton>
        )}
      </Header>
      {currentSheet.exercises.length === 0 ? (
        <AddExerciseContainer>
          <Text>
            Lista vazia {`\n`} Adicione os exercicios clicando no ícone abaixo
          </Text>
          <ButtonContainer>
            <ButtonAddWorkout handleOnPress={handleOnPress} />
          </ButtonContainer>
        </AddExerciseContainer>
      ) : (
        <ExerciseListContainer
          horizontal={false}
          refreshControl={
            <RefreshControl refreshing={updating} onRefresh={onUpdate} />
          }
          data={currentSheet.exercises}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ExerciseFichaItem
              id={item.id as string}
              name={item.name}
              img={""}
              description={item.description}
              videoId={item.videoId as string}
              onOpen={onOpen}
              charge={item.charge}
              sheetId={sheet.id as string}
            />
          )}
        />
      )}
      <>
        {exercises.length > 0 ? (
          <StartExerciseButtonContainer>
            <StartExerciseButton
              onPress={() => {
                navigate(routeCodes.WORKOUT, {
                  sheet: currentSheet,
                });
              }}
            >
              <ButtonText>Começar treino</ButtonText>
            </StartExerciseButton>
          </StartExerciseButtonContainer>
        ) : null}
      </>
    </Container>
  );
};
