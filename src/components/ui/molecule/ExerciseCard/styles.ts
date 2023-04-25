import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #ddd;
  border-radius: 10px;
  margin-top: 20px;
  overflow: hidden;
  height: 100px;
  flex: 1;
`;
export const ImgBox = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;
export const Img = styled.Text`
  text-align: center;
`;
export const Content = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
  width: ${RFValue(170)}px;
`;
export const ExerciseTitle = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(15)}px;
`;
export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  width: 100%;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #495057;
  justify-content: center;
  align-items: center;
  width: 70px;
`;
export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
`;
