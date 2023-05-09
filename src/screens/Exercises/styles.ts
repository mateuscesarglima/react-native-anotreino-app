import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { FlatList, FlatListProps } from "react-native";
import { IExercise } from "interfaces";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View``;
export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 40}px;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  margin-top: 30px;
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

export const ExerciseListContainer = styled(
  FlatList as new (props: FlatListProps<IExercise>) => FlatList<IExercise>
).attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 30,
    gap: 20,
    paddingBottom: getBottomSpace() + 250,
  },
})``;

export const AddExerciseButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 60px;
`;

export const StartText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

export const StartExerciseButton = styled(RectButton)`
  position: absolute;
  bottom: ${getBottomSpace() + 130}px;
  right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(Feather)`
  color: green;
  align-self: center;
`;
