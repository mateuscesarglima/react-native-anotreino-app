import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Dimensions, FlatList, FlatListProps } from "react-native";
import { IExercise } from "@Interfaces/index";

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
  margin-top: ${getStatusBarHeight()}px;
  border-top-left-radius: 8px;
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

export const WorkoutListWrapper = styled.View`
  width: ${Dimensions.get("window").width - 50}px;
`;
export const WorkoutList = styled(
  FlatList as new (props: FlatListProps<IExercise>) => FlatList<IExercise>
).attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
  contentContainerStyle: {},
})``;

export const Footer = styled.View``;
