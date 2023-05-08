import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import { IExercise } from "@Interfaces/index";
import { FlatList, FlatListProps } from "react-native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: flex-end;
  padding: 25px 20px;
`;

export const BackButton = styled(RectButton)``;

export const Icon = styled(Feather)``;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  align-self: center;
`;

export const Content = styled.View`
  padding: 10px;
  flex: 1;
`;

export const ExercisesList = styled(
  FlatList as new (props: FlatListProps<IExercise>) => FlatList<IExercise>
).attrs({
  showsVerticallScrollIndicator: false,
  contentContainerStyle: {
    flexDirection: "column",
  },
})``;
