import { Feather } from "@expo/vector-icons";
import { IExercise } from "interfaces";
import { FlatList, FlatListProps } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;
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
  font-size: 20px;
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
    marginTop: 20,
    paddingBottom: getBottomSpace(),
  },
})``;

export const AddExerciseButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 60px;
`;

export const StartExerciseButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #495057;
  padding-top: 30px;
`;

export const StartExerciseButton = styled(RectButton)`
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 50px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: ${RFValue(20)}px;
`;
