import React, { useEffect, useState } from "react";

import { BackButton, Icon } from "@Screens/Exercises/styles";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import {
  Container,
  Content,
  ContentTitle,
  Description,
  Header,
  NoteInput,
  NoteInputWrapper,
  SaveNoteButton,
  SaveNoteButtonText,
  Title,
} from "./styles";
import { useSheet } from "@Context/sheets";

interface Params {
  exerciseId: string;
}

export const Notes = () => {
  const { goBack }: NavigationProp<ParamListBase> = useNavigation();
  const [note, setNote] = useState<string | undefined>("");
  const { getNote, updateNote } = useSheet();
  const route = useRoute();
  const { exerciseId } = route.params as Params;

  useEffect(() => {
    const handleGetNote = async () => {
      const response = await getNote(exerciseId);
      if (response) {
        setNote(response);
      }
    };
    handleGetNote();
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack}>
          <Icon name="chevron-left" size={35} color={"white"} />
        </BackButton>
        <Title>Carga</Title>
      </Header>
      <Content>
        <ContentTitle>Minhas anotações</ContentTitle>
        <Description>
          Utilize o campo abaixo para realizar suas anotações sobre o exercício.
          Elas ficarão disponíveis somente para você.
        </Description>
        <NoteInputWrapper>
          <NoteInput
            value={note}
            onChangeText={(text) => setNote(text)}
            placeholder="Exemplo: Ajuste do banco, altura da máquina, etc."
            multiline={true}
            numberOfLines={4}
          />
        </NoteInputWrapper>
        <SaveNoteButton
          enabled={note && note.length > 0 ? true : false}
          onPress={() => {
            updateNote(exerciseId, note as string);
          }}
        >
          <SaveNoteButtonText enabled={note && note.length > 0 ? true : false}>
            Salvar
          </SaveNoteButtonText>
        </SaveNoteButton>
      </Content>
    </Container>
  );
};
