import React from "react";

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import * as S from "./styles";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  const { goBack }: NavigationProp<ParamListBase> = useNavigation();
  return (
    <S.Header>
      <S.BackButton onPress={goBack}>
        <ArrowLeft size={30} color="#FFF" />
      </S.BackButton>
      <S.Title>{title}</S.Title>
    </S.Header>
  );
};
