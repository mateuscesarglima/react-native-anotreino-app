import { Feather } from "@expo/vector-icons";
import { FlatList, FlatListProps } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { IExerciseCategory } from "../../interfaces/index";

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

export const ExercisesContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const CategoryExerciseContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const Content = styled(
  FlatList as new (
    props: FlatListProps<IExerciseCategory>
  ) => FlatList<IExerciseCategory>
).attrs({
  showsVerticallScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
})``;

export const CategoryContainer = styled(RectButton)`
  width: 150px;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin: 20px;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
`;

export const ExerciseItem = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  color: #fff;
`;
