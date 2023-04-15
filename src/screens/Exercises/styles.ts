import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View``;
export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 40}px;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  top: 65px;
`;

export const HeaderText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  align-self: center;
`;

export const Main = styled.View`
  margin-top: 60px;
`;
export const Text = styled.Text`
  font-size: 30px;
  text-align: center;
`;

export const Icon = styled(Feather)``;

export const AddExerciseContainer = styled.View`
  align-items: center;
`;

export const ButtonContainer = styled.View`
  margin-top: 30px;
`;

export const ExerciseListContainer = styled.View`
  align-items: center;
`;
