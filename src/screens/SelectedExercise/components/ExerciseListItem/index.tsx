import React, { useEffect } from "react";

import { useSheet } from "@Context/sheets";
import { IExercise, ISheet } from "@Interfaces/index";
import { LoadContainer } from "@Screens/Home/styles";
import { ActivityIndicator, ScrollView } from "react-native";
import {
  AddButton,
  Container,
  Content,
  Icon,
  Img,
  ItemDescription,
  ItemName,
} from "./styles";
interface ExerciseListItemProps {
  exercise: IExercise;
  sheet: ISheet;
}

export const ExerciseListItem = ({
  exercise,
  sheet,
}: ExerciseListItemProps) => {
  const { description, name, id } = exercise;
  const { handleAddNewExercise, sheets, handleRemoveExercise } = useSheet();
  const { isLoading } = useSheet();

  const handleVeryfiIfExistExercise = () => {
    const sheetTmp = sheets.find((s) => s.name === sheet.name);
    const exerciseTmp = sheetTmp?.exercises.find((e) => e.name === name);
    let resp = false;
    if (exerciseTmp) {
      resp = true;
    }
    return resp;
  };

  const handleOnPress = (sheetToVerify: ISheet): boolean => {
    const obj = sheets.find((obj) => obj.name === sheetToVerify.name);
    const exerciseTmp = obj?.exercises.find((e) => e.name === name);
    if (exerciseTmp) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    handleVeryfiIfExistExercise();
  }, [exercise]);

  return (
    <Container>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator size={"large"} />
        </LoadContainer>
      ) : (
        <>
          <Img
            source={{
              uri: "https://img2.gratispng.com/20180713/thx/kisspng-pulldown-exercise-weight-training-latissimus-dorsi-neck-muscle-5b4922d8728b45.1547314915315197044692.jpg",
            }}
          />
          <Content style={{ padding: 10 }}>
            <ItemName>{name}</ItemName>
            <ScrollView>
              <ItemDescription>{description}</ItemDescription>
            </ScrollView>
          </Content>
          <AddButton
            activeOpacity={0.7}
            hasExercise={handleVeryfiIfExistExercise()}
            onPress={() => {
              const result = handleOnPress(sheet);
              if (!result) {
                handleAddNewExercise(exercise, sheet);
              } else {
                handleRemoveExercise(exercise, sheet);
              }
            }}
          >
            <Icon
              name={handleVeryfiIfExistExercise() ? "check" : "plus-circle"}
              color="#FFF"
              size={40}
            />
          </AddButton>
        </>
      )}
    </Container>
  );
};
