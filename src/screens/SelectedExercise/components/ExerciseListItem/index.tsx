import React, { useEffect, useState } from "react";

import { useSheet } from "@Context/sheets";
import { IExercise, ISheet } from "@Interfaces/index";
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
  const { handleAddNewExercise, sheets } = useSheet();
  const [hasExercise, setHasExercise] = useState(false);
  const [exercises, setExercises] = useState<IExercise[]>();

  useEffect(() => {
    const sheetTmp = sheets.find((s) => s.name === sheet.name);
    const exerciseTmp = sheetTmp?.exercises.find((e) => e.name === name);
    setExercises(sheetTmp?.exercises);
    if (exerciseTmp) {
      setHasExercise(true);
    }
    console.log("CHAMOU");
  }, [exercise]);

  return (
    <Container>
      <Img
        source={{
          uri: "https://img2.gratispng.com/20180713/thx/kisspng-pulldown-exercise-weight-training-latissimus-dorsi-neck-muscle-5b4922d8728b45.1547314915315197044692.jpg",
        }}
      />
      <Content>
        <ItemName>{name}</ItemName>
        <ItemDescription>{description}</ItemDescription>
      </Content>
      <AddButton
        activeOpacity={0.7}
        hasExercise={hasExercise}
        onPress={() => {
          handleAddNewExercise(exercise, sheet);
        }}
      >
        <Icon
          name={hasExercise ? "check" : "plus-circle"}
          color="#FFF"
          size={40}
        />
      </AddButton>
    </Container>
  );
};
