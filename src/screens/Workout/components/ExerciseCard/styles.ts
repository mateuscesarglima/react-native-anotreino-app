import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View``;
export const Content = styled.View`
  width: 320px;
  border-radius: 8px;
  margin-top: 30px;
  background-color: #fff;
`;
export const Header = styled.View`
  background-color: #fff;
  height: 180px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

interface isDoneWrapperProps {
  isDone: boolean;
}

export const IsDoneWrapper = styled.View<isDoneWrapperProps>`
  position: absolute;
  top: 150px;
  background-color: ${({ isDone, theme }) =>
    isDone ? theme.colors.quarternary : "orange"};
  z-index: 1;
  border-radius: 8px;
  justify-content: center;
  align-self: center;
`;

export const ButtonDoneText = styled.Text`
  font-size: ${RFValue(15)}px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ButtonDoneExercise = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
  padding: 10px 10px;
`;

export const Body = styled.View`
  height: 300px;
  background-color: #fff;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Serie = styled.View``;
export const SerieText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;
export const Repetition = styled.View``;
export const RepetitionText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;
export const SerieAndRepetitionWrapper = styled.View`
  flex-direction: row;
  gap: 20px;
  padding: 0px 20px;
  margin-top: 20px;
`;

export const ExerciseNameWrapper = styled.View`
  background-color: #ddd;
  height: 80px;
  justify-content: center;
  padding-left: 20px;
`;

export const ExerciseName = styled.Text`
  font-size: ${RFValue(15)}px;
  letter-spacing: 1.2px;
`;

export const SerieValue = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  color: #868e96;
`;
export const RepetitionValue = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  color: #868e96;
`;

export const Rest = styled.View`
  height: 50px;
  margin-top: 20px;
  background-color: #ddd;
  width: 90%;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const RestText = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(14)}px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-left: 10px;
`;

export const TimeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Time = styled.Text``;
export const ButtonIcon = styled(Feather)`
  color: #fff;
`;

export const ButtonPlayWrapper = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 50px;
  height: 100%;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  border-top-width: 1px;
  border-top-color: #ddd;
  height: 47px;
  margin-top: 40px;
`;
export const RightWrapper = styled.View``;
export const RightSideFooter = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 50%;
`;
export const Divisor = styled.View`
  border-right-width: 1px;
  border-right-color: #ddd;
`;
export const LeftWrapper = styled.View``;
export const LeftSideFooter = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 50%;
`;
export const WeightValue = styled.Text`
  color: black;
  font-weight: bold;
  font-size: ${RFValue(15)}px;
`;
export const AnotationWrapper = styled.View`
  align-items: center;
`;
export const Anotations = styled.Text``;
