import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FlatList, FlatListProps } from "react-native";
import { ITreino } from "interfaces";

interface IconProps {
  hasData?: boolean;
}

export const Container = styled.View``;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 130px;
`;

export const AddWorkoutHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${getStatusBarHeight() + 30}px;
  gap: 20px;
  justify-content: space-between;
  padding: 0px 30px;
`;

export const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #fff;
`;

export const WorkoutListContainer = styled.View`
  align-items: center;
  margin-top: 30px;
`;

export const WorkoutList = styled(
  FlatList as new (props: FlatListProps<ITreino>) => FlatList<ITreino>
)``;

export const AddWorkoutContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${RFPercentage(30)}px;
`;

export const AddWorkoutButton = styled.TouchableOpacity``;

export const Icon = styled(Feather)<IconProps>`
  color: ${({ hasData }) => (hasData ? "#FFF" : null)};
`;
