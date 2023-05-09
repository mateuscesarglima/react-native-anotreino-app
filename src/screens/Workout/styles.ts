import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: #495057;
`;

export const Header = styled.View`
  height: 115px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  margin-top: ${getStatusBarHeight()};
`;
export const BackButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
`;
export const Icon = styled(Feather)`
  color: #fff;
`;
export const Content = styled.View`
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: ${RFValue(18)}px;
`;
export const DoneExercises = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  font-size: ${RFValue(15)}px;
`;

export const Main = styled.View``;

export const Footer = styled.View``;
