import React, { useState } from "react";

import { BackButton, Icon } from "@Screens/Exercises/styles";
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
import { View } from "react-native";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

export const Notes = () => {
  const { goBack }: NavigationProp<ParamListBase> = useNavigation();

  const [note, setNote] = useState("");

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
        <SaveNoteButton enabled={note.length > 0 ? true : false}>
          <SaveNoteButtonText enabled={note.length > 0 ? true : false}>
            Salvar
          </SaveNoteButtonText>
        </SaveNoteButton>
      </Content>
    </Container>
  );
};
