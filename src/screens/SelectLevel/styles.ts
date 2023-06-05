import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View``;

export const Main = styled.View``;
export const SelectTimerText = styled.Text`
  align-self: center;
  margin-top: 20px;
  font-weight: bold;
  font-size: ${RFValue(15)}px;
`;

export const SelectLevelContainer = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const LevelItem = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 12px;
`;

interface LevelInfoContainerProps {
  color: string;
}

export const LevelInfoContainer = styled.View<LevelInfoContainerProps>`
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background-color: ${({ color }) => (color ? color : "blue")};
  padding: 10px;
  border-radius: 8px;
`;

export const LevelTextTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;
export const LevelNumber = styled.Text`
  color: #fff;
  font-weight: 800;
  font-size: 25px;
`;

export const ItemInfoText = styled.Text`
  flex: 1;
  margin-left: 15px;
  letter-spacing: 1px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: #ddd;
`;
