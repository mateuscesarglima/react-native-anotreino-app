import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonProps {
  hasExercise: boolean;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ddd;
  margin-top: 20px;
  height: 130px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Content = styled.View``;

export const Img = styled.Image`
  margin-left: 10px;
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const ItemName = styled.Text`
  font-size: ${RFValue(15)}px;
  margin-bottom: 10px;
  width: 200px;
  font-weight: bold;
`;

export const ItemDescription = styled.Text`
  font-size: ${RFValue(12)}px;
  width: 200px;
  flex-wrap: wrap;
`;

export const AddButton = styled(RectButton)<ButtonProps>`
  height: 100%;
  justify-content: center;
  align-items: center;
  width: 60px;
  background-color: ${({ theme, hasExercise }) =>
    hasExercise ? "green" : theme.colors.primary};
`;

export const Icon = styled(Feather)``;

export const LoadContainer = styled.View`
  justify-content: center;
  align-items: center;
  align-self: center;
`;
