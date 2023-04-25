import { Feather } from "@expo/vector-icons";
import { IExercise } from "interfaces";
import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View``;
export const Header = styled.View`
  height: 120px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  justify-content: flex-end;
  padding-bottom: 20px;
  position: relative;
`;

export const Title = styled.Text`
  margin: 0 auto;
  font-size: 30px;
  color: #fff;
  justify-content: flex-start;
`;
export const ExercisesList = styled(
  FlatList as new (props: FlatListProps<IExercise>) => FlatList<IExercise>
)``;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 60px;
`;
export const Icon = styled(Feather)`
  color: #fff;
`;
export const Main = styled.View`
  padding: 20px;
  height: 100%;
`;
