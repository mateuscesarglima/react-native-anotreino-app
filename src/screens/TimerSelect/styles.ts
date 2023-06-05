import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Main = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const SelectTimerText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  margin-top: 20px;
`;

export const TimersCardContainer = styled.View``;
export const CardItem = styled.TouchableOpacity`
  margin-right: 10px;
  background-color: #ddd;
  width: 150px;
  height: 100px;
  border-radius: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;
export const Time = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;
export const MinutesText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #868e96;
`;
